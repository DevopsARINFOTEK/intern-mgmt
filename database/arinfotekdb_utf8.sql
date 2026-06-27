--
-- PostgreSQL database dump
--

\restrict bPhdT5n3RE8d8gTBZDYqxyl8gydiikF1nd8deW0fWgg7r9YtsIgu50dmvIzG6Jz

-- Dumped from database version 17.10
-- Dumped by pg_dump version 18.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: allocations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.allocations (
    allocation_id uuid DEFAULT gen_random_uuid() NOT NULL,
    student_id uuid,
    domain character varying(100),
    mentor_name character varying(100),
    allocated_date date DEFAULT CURRENT_DATE,
    status character varying(30)
);


ALTER TABLE public.allocations OWNER TO postgres;

--
-- Name: internships; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.internships (
    internship_id uuid DEFAULT gen_random_uuid() NOT NULL,
    student_id uuid,
    start_date date,
    end_date date,
    status character varying(30)
);


ALTER TABLE public.internships OWNER TO postgres;

--
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    student_id uuid DEFAULT gen_random_uuid() NOT NULL,
    full_name character varying(100),
    email character varying(100),
    contact_number character varying(15),
    college_name character varying(150),
    branch character varying(100),
    year character varying(20),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.students OWNER TO postgres;

--
-- Data for Name: allocations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.allocations (allocation_id, student_id, domain, mentor_name, allocated_date, status) FROM stdin;
396421e6-40e0-49b1-bc6d-9c8971dda739	2829afcb-883c-4599-ad17-554a1380729c	Full Stack Development	Rahul Kumar	2026-06-11	ALLOCATED
\.


--
-- Data for Name: internships; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.internships (internship_id, student_id, start_date, end_date, status) FROM stdin;
\.


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.students (student_id, full_name, email, contact_number, college_name, branch, year, created_at) FROM stdin;
2829afcb-883c-4599-ad17-554a1380729c	Bhuvaneswari	bhuvaneswari@gmail.com	9876543210	Adhiyamaan College	Computer Science	3rd Year	2026-06-11 10:42:27.845952
\.


--
-- Name: allocations allocations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.allocations
    ADD CONSTRAINT allocations_pkey PRIMARY KEY (allocation_id);


--
-- Name: internships internships_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.internships
    ADD CONSTRAINT internships_pkey PRIMARY KEY (internship_id);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (student_id);


--
-- Name: allocations allocations_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.allocations
    ADD CONSTRAINT allocations_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(student_id);


--
-- Name: internships internships_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.internships
    ADD CONSTRAINT internships_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(student_id);


--
-- PostgreSQL database dump complete
--

\unrestrict bPhdT5n3RE8d8gTBZDYqxyl8gydiikF1nd8deW0fWgg7r9YtsIgu50dmvIzG6Jz

