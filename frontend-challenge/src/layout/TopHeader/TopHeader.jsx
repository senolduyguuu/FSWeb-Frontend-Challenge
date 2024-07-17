import DarkModeToggle from "../../component/DarkModeToggle/DarkModeToggle"
import LanguageSwitcher from "../../component/LanguageSwitcher/LanguageSwitcher"
const TopHeader = () => {
	return (
		<>
			<div>
				<div className="flex items-center justify-end	">
					<DarkModeToggle />
					<LanguageSwitcher />
				</div>
			</div>

		</>

	)
}
export default TopHeader