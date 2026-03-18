"use client";

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      projectType: 'MAUI',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre es obligatorio'),
      email: Yup.string().email('Correo no válido').required('El correo es obligatorio'),
      projectType: Yup.string().required('Selecciona el tipo de proyecto'),
      description: Yup.string().required('Cuéntanos sobre tu proyecto').min(10, 'Por favor, da un poco más de detalle'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setStatus("loading");
      try {
        const response = await fetch('https://formspree.io/f/xvgznwqw', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setStatus("success");
          resetForm();
        } else {
          setStatus("error");
        }
      } catch (error) {
        setStatus("error");
      }
    },
  });

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Cuéntanos tu Visión</h3>
      
      {status === "success" && (
        <div className={styles.successMessage}>
          ¡Gracias! Hemos recibido tu solicitud. Nos pondremos en contacto pronto.
        </div>
      )}

      {status === "error" && (
        <div className={styles.errorMessage}>
          Hubo un problema al enviar el formulario. Por favor, intenta usar el botón de WhatsApp temporalmente.
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        
        {/* Nombre */}
        <div className={styles.fieldGroup}>
          <label htmlFor="name" className={styles.label}>Nombre Completo</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`${styles.inputBase} ${formik.touched.name && formik.errors.name ? styles.inputError : styles.inputNormal}`}
            placeholder="Ej. Jorge Michel"
          />
          {formik.touched.name && formik.errors.name ? (
            <span className={styles.errorText}>{formik.errors.name}</span>
          ) : null}
        </div>

        {/* Email */}
        <div className={styles.fieldGroup}>
          <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`${styles.inputBase} ${formik.touched.email && formik.errors.email ? styles.inputError : styles.inputNormal}`}
            placeholder="ejemplo@correo.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <span className={styles.errorText}>{formik.errors.email}</span>
          ) : null}
        </div>

        {/* Tipo de Proyecto */}
        <div className={styles.fieldGroup}>
          <label htmlFor="projectType" className={styles.label}>Costo Cotizado/Proyecto de Interés</label>
          <select
            id="projectType"
            name="projectType"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.projectType}
            className={styles.select}
          >
            <option value="MAUI">MAUI (IA para Veterinarias)</option>
            <option value="Polyglot AI">Polyglot AI (EdTech)</option>
            <option value="Web Design">Web Design / Landing Page</option>
            <option value="Otro">Otro Proyecto Tecnológico / IA</option>
          </select>
        </div>

        {/* Descripción */}
        <div className={styles.fieldGroup}>
          <label htmlFor="description" className={styles.label}>Descripción del Proyecto</label>
          <textarea
            id="description"
            name="description"
            rows={4}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className={`${styles.inputBase} ${formik.touched.description && formik.errors.description ? styles.inputError : styles.inputNormal}`}
            placeholder="Descríbenos brevemente tus objetivos..."
          />
          {formik.touched.description && formik.errors.description ? (
            <span className={styles.errorText}>{formik.errors.description}</span>
          ) : null}
        </div>

        {/* Botón Submit */}
        <button 
          type="submit" 
          disabled={status === "loading"}
          className={styles.submitBtn}
        >
          {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </div>
  );
}
