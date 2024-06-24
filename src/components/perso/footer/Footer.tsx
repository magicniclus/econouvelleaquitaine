const Footer = () => {
  return (
    <footer className="w-full mb-14 md:mb-0">
      <div className="w-full max-w-5xl mx-auto px-4 py-10 md:px-6 text-slate-700 flex justify-between flex-col md:flex-row">
        <p className="text-sm">© 2021 Nom de mon site tous droits réservés.</p>
        <div className="flex flex-col md:flex-row  mt-5 md:mt-0">
          <a href="/mentions-legales" target="_blank" className="underline">
            Mentions légales
          </a>
          <a
            href="/politique"
            target="_blank"
            className="underline mt-3 md:mt-0 md:ml-5"
          >
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;