import { React, useState, useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import InputItem from "../components/form/InputItem";
import SelectItem from "../components/form/SelectItem";
import CheckBoxRadioItem from "../components/form/CheckBoxRadioItem";
import TextArea from "../components/form/TextArea";
import { UserContext, Roles } from "../store";

function ProfileEdit({ closeProfileModal }) {
  const [state, dispatch] = useContext(UserContext);
  console.log("ProfileEdit", state);
  const navigate = useNavigate();
  const [passBtn, setPassBtn] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...state,
    },
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log("ProfileEdit submit", data);

    // setUserData(() => {
    //   return { ...data };
    // });

    // dispatch({
    //   type: "UPDATE_USER_DATA",
    //   payload: {
    //     ...state,
    //     username: data.username,
    //     password: data.password,
    //     role: data.role,
    //     sexaul: data.sexaul,
    //     breif: data.breif,
    //   },
    // });
    closeProfileModal();
    navigate("/login");
  };

  const watchForm = useWatch({
    control,
  });

  useEffect(() => {
    console.log(getValues());
    console.log(getValues("isCheckPass"));
    if (getValues("isCheckPass") === "true") {
      console.log("open");
      setPassBtn(true);
    } else {
      setPassBtn(false);
    }
  }, [watchForm]);

  return (
    <>
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

        {passBtn ? (
          <div className="mb-3">
            <InputItem
              id="password"
              type="password"
              errors={errors}
              labelText="密碼"
              register={register}
              rules={{}}
            />
          </div>
        ) : (
          <div className="mb-3">
            <InputItem
              id="password"
              type="password"
              errors={errors}
              labelText="密碼"
              register={register}
              rules={{
                required: "使用者名稱為密碼",
                minLength: {
                  value: 5,
                  message: "密碼不得小於10個字元",
                },
                disabled: true,
              }}
            />
          </div>
        )}

        <div className="mb-3">
          <CheckBoxRadioItem
            type="checkbox"
            name="isCheckPass"
            id="isCheckPass"
            value={true}
            register={register}
            errors={errors}
            rules={{ required: false }}
            labelText="更改密碼"
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
            {Roles.map((role, id) => {
              return (
                <option value={role} key={id}>
                  {role}
                </option>
              );
            })}
          </SelectItem>
        </div>

        <div className="mb-3">
          <div className="form-label">性別</div>
          <CheckBoxRadioItem
            type="radio"
            name="sexual"
            id="men"
            value="men"
            register={register}
            errors={errors}
            rules={{ required: "請選擇您的性別" }}
            labelText="男"
          />
          <CheckBoxRadioItem
            type="radio"
            name="sexual"
            id="female"
            value="female"
            register={register}
            errors={errors}
            rules={{ required: "請選擇您的性別" }}
            labelText="女"
          />
          <CheckBoxRadioItem
            type="radio"
            name="sexual"
            id="other"
            value="other"
            register={register}
            errors={errors}
            rules={{ required: "請選擇您的性別" }}
            labelText="其他"
          />
        </div>

        <div className="mb-3">
          <TextArea
            id="brief"
            labelText="自我介紹"
            register={register}
            errors={errors}
            rules={{
              maxLength: {
                value: 100,
                message: "自我介紹不超過 100 字",
              },
            }}
            row="5"
          />
        </div>

        <div className="row row-cols-2 g-0 ">
          <div className="col-6">
            <button type="submit" className="btn btn-info">
              更新
            </button>
          </div>

          <div className="col-6">
            <button
              type="button"
              className="btn btn-info"
              onClick={closeProfileModal}
            >
              關閉
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ProfileEdit;
