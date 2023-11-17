import { ChooseAccountType } from '../../Components/ChooseAccountType/ChooseAccountType'
import { CreateAccountProgress } from '../../Components/CreateAccountProgress/CreateAccountProgress'

export const CreateAccountPage = () => {
    return (
        <div className="flex w-full h-screen m:flex-col">
            <CreateAccountProgress />
            <ChooseAccountType />
        </div>
    )
}
