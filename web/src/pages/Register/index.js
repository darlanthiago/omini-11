import React, { useState } from 'react';

import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './styles.css';


export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = { name, email, whatsapp, city, uf };

        try {
            const reponse = await api.post('/ongs', data);

            alert(`Copie seu ID de acesso: ${reponse.data.id}`);

            history.push('/');

        } catch (error) {

            alert(`Erro no cadastro, tente novamente`);
        }

    }



    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/" className="back-link"><FiArrowLeft size={16} color="#e02041" /> Já tenho login</Link>

                </section>

                <form onSubmit={handleRegister}>

                    <input type="text" placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="tel" id="phone" name="phone" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="Whatsapp (61987654321)" />
                    <div className="input-group">
                        <input type="text" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
                        <input type="text" placeholder="UF" value={uf} onChange={e => setUf(e.target.value)} style={{ width: 80 }} />

                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>

    );
}
