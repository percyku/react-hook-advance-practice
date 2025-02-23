import { React, useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import InputItem from "../components/form/InputItem";
import SelectItem from "../components/form/SelectItem";
import CheckBoxRadioItem from "../components/form/CheckBoxRadioItem";
//import AuthService from "../services/auth.service";

function Login() {
  const [roles, setRoles] = useState(["STUDENT", "INSTRUCTOR"]);
  const [errorMsg, setErrorMsg] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // username: "percyku19@gmail.com",
      // password: "fun123",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log("submit", data);

    //just try to connect background test
    // const baToken = "Basic " + window.btoa(data.username + ":" + data.password);

    // try {
    //   let response = await AuthService.loginforLearnSys(
    //     baToken,
    //     `ROLE_${data.role}`
    //   );
    //   console.log(response);
    // } catch (e) {
    //   console.log("error", e);
    //   console.log("error", e.status);
    //   console.log("error", e.message);
    //   setErrorMsg("登入異常");
    // }
  };

  const watchForm = useWatch({
    control,
  });

  useEffect(() => {
    console.log(getValues()); // 可以使用 getValues 取得所有、特定值
    // console.log("errors", errors);
    // 或是使用 setValues 寫入值
  }, [watchForm]); // 將新變數傳入

  return (
    <>
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <InputItem
            id="username"
            type="text"
            errors={errors}
            labelText="使用者名稱"
            register={register}
            rules={{
              required: "使用者名稱為必填",
              maxLength: {
                value: 30,
                message: "使用者名稱長度不超過 10",
              },
            }}
          />
        </div>

        <div className="mb-3">
          <InputItem
            id="password"
            type="password"
            errors={errors}
            labelText="密碼"
            register={register}
            rules={{
              required: "使用者必填密碼",
              minLength: {
                value: 5,
                message: "密碼不得小於10個字元",
              },
            }}
          />
        </div>

        <div className="mb-3">
          <SelectItem
            id="role"
            labelText="角色"
            errors={errors}
            register={register}
            rules={{
              required: "角色為必填",
            }}
          >
            <option value="">請選擇角色</option>
            {roles.map((role, id) => {
              return (
                <option value={role} key={id}>
                  {role}
                </option>
              );
            })}
          </SelectItem>
        </div>

        <div className="mb-3">
          <CheckBoxRadioItem
            type="checkbox"
            name="isCheckForm"
            id="isCheckForm"
            value={true}
            register={register}
            errors={errors}
            rules={{ required: false }}
            labelText="確認保持登入"
          />
        </div>

        <button type="submit" className="btn btn-info">
          登入
        </button>
      </form>
    </>
  );
}

export default Login;
