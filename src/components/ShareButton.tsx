import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function ShareButton({ post }: { post: any }) {
	const handleCopyLink = () => {
		navigator.clipboard.writeText(`https://impulsocristiano.info${post.url}`);

		Toastify({
			text: "Enlace copiado",
			duration: 2000,
			close: true,
			gravity: "top", // `top` or `bottom`
			position: "right", // `left`, `center` or `right`
			backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
			stopOnFocus: true, // Prevents dismissing of toast on hover
		}).showToast();
	};

	return (
		<footer className="mobile:flex-row flex items-center justify-center gap-x-2">
			<button
				onClick={handleCopyLink}
				className="rounded-full bg-slate-800 p-2 text-xs text-white dark:bg-white dark:text-gray-900"
			>
				Copiar enlace
			</button>
			<a
				href={`https://wa.me/?text=https://impulsocristiano.info${encodeURIComponent(
					post.url
				)}`}
				target="_blank"
				rel="noopener noreferrer"
				className="rounded-full bg-green-200 p-2 text-green-800 text-xs"
			>
				Compartir en WhatsApp
			</a>
		</footer>
	);
}
