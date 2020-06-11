import React, { useState, useEffect } from "react";
import "./app.css";
import api from "./services/api";

export default () => {
  const [projects, setProjects] = useState([]);

  const onAddProject = () =>
    api
      .post("/projects", {
        title: "BaaS com Firebase",
        owner: "Julia Ramos",
      })
      .then((response) => setProjects([...projects, response.data]));

  useEffect(() => {
    api.get("/projects").then((response) => setProjects(response.data));
  }, []);

  return (
    <>
      <h1>Projetos</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>{project.title}</li>
        ))}
      </ul>
      <button type="button" onClick={onAddProject}>
        Adicionar projeto
      </button>
    </>
  );
};
