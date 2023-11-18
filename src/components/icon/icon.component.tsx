import Icons from "../../assets/sprite.svg";

interface Props {
	id: string;
	className?: string;
}

const Icon = ({ id, className }: Props) => {
	return (
		<svg className={className ? className : ""}>
			<use href={`${Icons}#${id}`} />
		</svg>
	);
};

export default Icon;
