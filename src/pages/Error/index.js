import './style.scss';

/**
 * It returns a div with the class name containerError.
 * @returns A div with a className of containerError.
 */
 export default function Error(){
    return(
        <div className="containerError">
<div className="codeError">ERROR 404</div>
<div className="messageError">Oups! Une erreur s'est produite.</div>
<div className="lienAccueil"> <a href="/accueil ">Revenir sur la page d'accueil</a></div>
        </div>
    )
};
