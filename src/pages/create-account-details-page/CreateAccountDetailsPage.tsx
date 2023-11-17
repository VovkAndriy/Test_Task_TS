import { CreateAccountProgress } from '../../Components/CreateAccountProgress/CreateAccountProgress'
import { RegisterForm } from '../../Components/RegisterForm/RegisterForm'

export const CreateAccountDetailsPage = () => {
    return (
        <div className="flex w-full h-screen m:flex-col">
            <CreateAccountProgress />
            <RegisterForm />
        </div>
    )
}
