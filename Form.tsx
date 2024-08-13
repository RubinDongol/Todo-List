// import { useState } from "react";
// import { SubmitHandler, useForm, Controller } from "react-hook-form";

// interface FormData {
//   username: string;
//   email: string;
//   password: string;
// }

// const Form = () => {
//   const { register, handleSubmit, errors, control } = useForm<FormData>();

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log(data);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <h1>Registration Form</h1>
//         <div className="divider"></div>
//         <div className="form"></div>
//         <div className="field">
//           <label>Username</label>
//           <Controller
//             name="username"
//             control={control}
//             rules={{}}
//             render={({ name, onChange, value }) => (
//               <input
//                 name={name}
//                 onChange={onChange}
//                 value={value}
//                 type="text"
//                 placeholder="Username"
//               />
//             )}
//           />
//           {/* <input
//             type="text"
//             {...register("username")}

//             placeholder="Username"

//           /> */}
//         </div>
//         <div className="field">
//           <label>Email</label>
//           <Controller
//             name="email"
//             control={control}
//             render={({ name, onChange, value }) => (
//               <input
//                 name={name}
//                 onChange={onChange}
//                 value={value}
//                 type="email"
//                 placeholder="Username"
//               />
//             )}
//           />
//         </div>
//         <div className="field">
//           <label>Password</label>
//           <Controller
//             name="password"
//             control={control}
//             render={({ name, onChange, value }) => (
//               <input
//                 name={name}
//                 onChange={onChange}
//                 value={value}
//                 type="password"
//                 placeholder="password"
//               />
//             )}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;
