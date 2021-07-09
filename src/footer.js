const FOOTER_URL = "https://foysal.it";

export const Footer = () => (
  <footer>
    <p className="text-gray-500 text-right pt-4">
      Made by{" "}
      <a
        className="underline italic"
        target="_blank"
        rel="noreferrer"
        href={FOOTER_URL}
      >
        Foysal
      </a>
    </p>
  </footer>
);
