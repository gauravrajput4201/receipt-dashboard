import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { setUserDetails } from "@/redux/UserRedux/userActions";
import LoginSchema from "@/validation-schema/LoginSchema";
import { useNavigate } from "react-router";
import WebUrl from "@/enums/WebUrl";

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  type FormSchemaType = z.infer<typeof LoginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<FormSchemaType> = async (data: {
    email: string;
    password: string;
  }) => {
    dispatch(
      setUserDetails({
        isLoggedIn: true,
        useremail: data,
      })
    );
    toast.success("success message");
    navigate(WebUrl.ACCOUNTING);
  };

  return (
    <div className="flex items-center gap-6 max-w-[90%] w-[500px]  m-auto h-[100vh] ">
      <Card className="overflow-hidden w-full p-6 bg-[#f5f5f5]">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center w-[141px] m-auto">
              {/* <Logo /> */}
            </div>
            <div className="flex flex-col ">
              <h1 className="text-2xl font-bold">Sign in</h1>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                placeholder="example@domain.com"
                disabled={isSubmitting}
                {...register("email")}
              />
              {errors.email && (
                <div className="text-red-500 text-xs">
                  {errors.email?.message}
                </div>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="********"
                disabled={isSubmitting}
                {...register("password")}
              />
              {errors.password && (
                <div className="text-red-500 text-xs">
                  {errors.password?.message}
                </div>
              )}
            </div>
            <Button
              type="submit"
              className="w-full font-semibold bg-[#603AE5] hover:bg-indigo-500 cursor-pointer"
              size={"lg"}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
