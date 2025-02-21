import { React, useState } from "react";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import InputItem from "../components/form/InputItem";
import SelectItem from "../components/form/SelectItem";
import CheckBoxItem from "../components/form/CheckBoxItem";

function Profile({ userData, setUserData, closeProfileModal }) {
  const [roles, setRoles] = useState(["STUDENT", "INSTRUCTOR"]);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...userData,
    },
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log("submit", data);

    setUserData(() => {
      return { ...data };
    });
    closeProfileModal();
  };

  const watchForm = useWatch({
    control,
  });

  useEffect(() => {
    console.log(getValues());
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

        <div className="mb-3">
          <InputItem
            id="password"
            type="password"
            errors={errors}
            labelText="密碼"
            register={register}
            rules={{
              // required: { value: true, message: "使用者必填密碼" },
              required: "使用者名稱為密碼",
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
          <div className="form-label">性別</div>
          <CheckBoxItem
            type="radio"
            name="sexual"
            id="men"
            value="men"
            register={register}
            errors={errors}
            rules={{ required: "請選擇您的性別" }}
            labelText="男"
          />
          <CheckBoxItem
            type="radio"
            name="sexual"
            id="female"
            value="female"
            register={register}
            errors={errors}
            rules={{ required: "請選擇您的性別" }}
            labelText="女"
          />
          <CheckBoxItem
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

        {/* <button type="submit" className="btn btn-info">
          註冊
        </button> */}
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

export default Profile;
