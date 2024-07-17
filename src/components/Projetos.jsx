import Link from "next/link";
import { Col, Row } from "react-bootstrap";

export default function Projetos() {
    return (
        <>
            <div id="projetos-content">
                <h1 id="projetos-title" className="java-text"><span>public</span> String[] projetos { '{' }</h1>
                <Row id="row-projeto" className="m-0 m-auto mt-4 mb-5">
                    <Col lg={6}>
                        <div className="card-projeto p-4 d-grid">
                            <div id="type-projeto">
                                <p>Java 17 + Spring + PostgreSQL <i className="devicon-spring-original"></i></p>
                            </div>
                            <div id="title-projeto">
                                <h4>Todo List RESTful API v2 - Gerenciador de Tarefas</h4>
                            </div>
                            <div id="description-projeto">
                                <p>Uma API para gerenciamento de tarefas Todo List, onde permite o cadastro de usuários, autenticação Basic Auth para login, recuperação de senha, cadastro, edição e exclusão de tarefas, além de listagem de tarefas completas, pendentes e gerais. Foi construída usando Java 17, Spring e driver para conexão com o banco PostgreSQL.</p>
                            </div>
                            <div id="view-projeto">
                                <Link target="_blank" rel="noopener noreferrer" href={"https://github.com/H3nriqueL1ma/spring-todolist-api"}>Visualizar Projeto</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="card-projeto p-4 d-grid">
                            <div id="type-projeto">
                                <p>Java 17 + Spring + SMTP Gmail <i className="devicon-spring-original"></i></p>
                            </div>
                            <div id="title-projeto">
                                <h4>RESTful API Portfolio - Envio de Emails</h4>
                            </div>
                            <div id="description-projeto">
                                <p>Uma API para envio de e-mails, onde permite o envio de emails do cliente de um formulário de contato para o meu email. Foi construída usando Java 17, Spring e um servidor SMTP para envio dos emails.</p>
                            </div>
                            <div id="view-projeto">
                                <Link target="_blank" rel="noopener noreferrer" href={"https://github.com/H3nriqueL1ma/portfolio-api"}>Visualizar Projeto</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="card-projeto p-4 d-grid">
                            <div id="type-projeto">
                                <p>Express.js + PostgreSQL <i className="devicon-express-original"></i></p>
                            </div>
                            <div id="title-projeto">
                                <h4>Todo List RESTful API v1 - Gerenciador de Tarefas</h4>
                            </div>
                            <div id="description-projeto">
                                <p>Primeira versão da API para gerenciamento de tarefas Todo List. Foi construída usando Express.js e cliente Postgres.js para conexão com o banco PostgreSQL.</p>
                            </div>
                            <div id="view-projeto">
                                <Link target="_blank" rel="noopener noreferrer" href={"https://github.com/H3nriqueL1ma/rest-api-express-postgres"}>Visualizar Projeto</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="card-projeto p-4 d-grid">
                            <div id="type-projeto">
                                <p style={ {fontSize: "13.1px !important"} }>Java 21 + Spring + PostgreSQL + SMTP Gmail <i className="devicon-spring-original"></i></p>
                            </div>
                            <div id="title-projeto">
                                <h4>Plann.er RESTful API - Planejador de Viagens</h4>
                            </div>
                            <div id="description-projeto">
                                <p style={ {fontSize: "11.8px !important"} }>Uma API para planejamento de viagens, onde permite o cadastro de viagem, confirmação da viagem por email, confirmação dos convidados com email de Presença Confirmada, validação de email, criação de atividades, assinalar a atividade como completa ou pendente, criação de links e validação de links. Foi construída usando Java 21, Spring, driver para conexão com o banco PostgreSQL e um servidor SMTP para envio dos emails.</p>
                            </div>
                            <div id="view-projeto">
                                <Link target="_blank" rel="noopener noreferrer" href={"https://github.com/H3nriqueL1ma/spring-planner-api-modular"}>Visualizar Projeto</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="card-projeto p-4 d-grid">
                            <div id="type-projeto">
                                <p className="front">React.js + Bootstrap 5 <i className="devicon-react-original"></i></p>
                            </div>
                            <div id="title-projeto">
                                <h4>Todo List - Gerenciador de Tarefas (Interface)</h4>
                            </div>
                            <div id="description-projeto">
                                <p>Um sistema de gerenciamento de tarefas Todo List, que consome uma API feita em Spring. Foi construído usando React.js e Bootstrap 5.</p>
                            </div>
                            <div id="view-projeto">
                                <Link className="front" target="_blank" rel="noopener noreferrer" href={"https://todolist-jeed.onrender.com/"}>Visualizar Projeto</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="card-projeto p-4 d-grid">
                            <div id="type-projeto">
                                <p className="front">TypeScript + Bootstrap 5 + Sass <i className="devicon-typescript-plain"></i></p>
                            </div>
                            <div id="title-projeto">
                                <h4>JetBridge - Empresa de Criação de Sites</h4>
                            </div>
                            <div id="description-projeto">
                                <p>Um site de uma empresa fictícia chamada JetBridge, que fornece serviços de desenvolvimento de websites, webapps e sistemas web. Projeto feito a partir de um Projeto Integrador do curso técnico. Construído usando TypeScript e Bootstrap 5.</p>
                            </div>
                            <div id="view-projeto">
                                <Link className="front" target="_blank" rel="noopener noreferrer" href={"https://jetbridge.onrender.com/"}>Visualizar Projeto</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="card-projeto p-4 d-grid">
                            <div id="type-projeto">
                                <p className="front">TypeScript + Bootstrap 5 + Sass <i className="devicon-typescript-plain"></i></p>
                            </div>
                            <div id="title-projeto">
                                <h4>Grooming Pet - PetMóvel</h4>
                            </div>
                            <div id="description-projeto">
                                <p>Um site de uma empresa fictícia chamada Grooming Pet, que fornece serviços de grooming (banho e tosa) móvel para animais de estimação. Projeto feito a partir de um Projeto Integrador do curso técnico. Construído usando TypeScript e Bootstrap 5.</p>
                            </div>
                            <div id="view-projeto">
                                <Link className="front" target="_blank" rel="noopener noreferrer" href={"https://projeto-site-grooming-pet.onrender.com/"}>Visualizar Projeto</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="card-projeto p-4 d-grid">
                            <div id="type-projeto">
                                <p className="front">React.js + Bootstrap 5 <i className="devicon-react-original"></i></p>
                            </div>
                            <div id="title-projeto">
                                <h4>Studio Charm - Ecommerce Cosméticos</h4>
                            </div>
                            <div id="description-projeto">
                                <p>Um e-commerce de uma loja fictícia chamada Studio Charm, que vende produtos de cosméticos. Projeto feito a partir de um Projeto Integrador do curso técnico. Construído usando React.js e Bootstrap 5.</p>
                            </div>
                            <div id="view-projeto">
                                <Link className="front" target="_blank" rel="noopener noreferrer" href={"https://ecommerce-studiocharm.onrender.com/"}>Visualizar Projeto</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <h1 id="projetos-title" className="java-text">{ '}' }</h1>
            </div>
        </>
    );
}