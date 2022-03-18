import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/auth";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Connecter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const { phone, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const state = useSelector((state) => state.auth);
  const { isAuthenticated, user } = state;

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(phone, password));
  };

  if (isAuthenticated) {
    switch (user.post) {
      case "administrateur":
        navigate("/administrateur");
        break;
      case "administratrice":
        navigate("/administratrice");
        break;
      case "receptionniste":
        navigate("/receptionniste");
        break;
      case "infirmiere":
        navigate("/infirmiere");
        break;
      case "laborantin":
        navigate("/laborantin");
        break;
      case "generaliste":
        navigate("/generaliste");
        break;
      case "radiologue":
        navigate("/radiologue");
        break;
      case "sagefemme":
        navigate("/sagefemme");
        break;
      case "gynecologue":
        navigate("/gynecologue");
        break;
      case "ophtalmologue":
        navigate("/ophtalmologue");
        break;

      case "pediatre":
        navigate("/pediatre");
        break;

      case "chirurgien":
        navigate("/chirurgien");
        break;

      case "orl":
        navigate("/orl");
        break;

      case "dermatologue":
        navigate("/dermatologue");
        break;

      case "pneumologue":
        navigate("/pneumologue");
        break;

      case "psychologue":
        navigate("/psychologue");
        break;

      case "neurologue":
        navigate("/neurologue");
        break;

      case "rhumatologue":
        navigate("/rhumatologue");
        break;

      case "nutritioniste":
        navigate("/nutritioniste");
        break;

      case "kinesitherapeute":
        navigate("/kinesitherapeute");
        break;

      case "gestionnairestock":
        navigate("/gestionnairestock");
        break;
      default:
        navigate("/");
    }
  }

  return (
    <section className='container'>
      <div className='my-5'>
        <h1 className='large text-primary'>CONNECTER</h1>
        <p className='lead'>
          <FaUser /> Connectez-vous à votre compte
        </p>
        <form className='form' onSubmit={onSubmit}>
          <div className='form-group mb-4'>
            <input
              className='form-control'
              type='tel'
              placeholder='Numéro de téléphone'
              name='phone'
              value={phone}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group mb-4'>
            <input
              className='form-control'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={onChange}
              minLength='4'
            />
          </div>
          <input type='submit' className='btn btn-primary' value='CONNEXION' />
        </form>
        <p className='my-1'>
          Si vous n'avez pas encore de compte, veuillez contacter les
          Administratrices.
        </p>
      </div>
    </section>
  );
};

export default Connecter;

//console.log(userInfo)
//Redirect
/*useEffect(() => {
    if (userInfo) {

      toast.success(`Bienvenu Sur Le Plate forme de Gestion de Stock`, { position: toast.POSITION.TOP_CENTER })
      switch (userInfo.poste) {
        case "administrateur":
          navigate("/administrateur")
          break;

        case "entrer":
          navigate("/entrer")
          break;

        case "sortie":
          navigate("/sortie")
          break;

        default:
          navigate("/")
          break;
      }
    }
  }, [state, navigate, userInfo])*/
