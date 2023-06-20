import { PlayIcon } from "@heroicons/react/24/solid/index.js";

const YouTube = () => {
	return (
		<article>
			<a
				href="https://www.youtube.com/channel/UCXrOrv13Ai7RuLHnkUkZb9w?sub_confirmation=1"
				target={"_blank"}
				className="relative block overflow-hidden rounded-xl bg-[url(https://drive.google.com/uc?export=view&id=1OY-MeBzDLyRcZtwZ8ICZNjhbTwH6AutR)] bg-cover bg-center bg-no-repeat my-3"
			>
				<span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-xl bg-red-600 px-4 py-2 text-xs font-semibold text-white">
					<PlayIcon className="ml-1.5 h-6 w-6 text-white" />
				</span>

				<div className="relative bg-black bg-opacity-40 p-8 pt-32 text-white">
					<h5 className="mt-2 text-2xl font-bold">Impulso Cristiano</h5>
					<p className="mt-2 text-sm text-gray-400">Último Video:</p>
					<p className="text-sm">
						Padres de un adolescente
					</p>
				</div>
			</a>
		</article>
	);
};

export default YouTube;
