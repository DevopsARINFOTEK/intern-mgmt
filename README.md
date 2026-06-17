Database Details
-----------------

postgres=# \l
                                                            List of databases
   Name    |  Owner   | Encoding | Locale Provider |      Collate       |       Ctype        | Locale | ICU Rules |   Access privileges
-----------+----------+----------+-----------------+--------------------+--------------------+--------+-----------+-----------------------
 arinfotek | postgres | UTF8     | libc            | English_India.1252 | English_India.1252 |        |           |
 newdb     | postgres | UTF8     | libc            | English_India.1252 | English_India.1252 |        |           |
 postgres  | postgres | UTF8     | libc            | English_India.1252 | English_India.1252 |        |           |
 template0 | postgres | UTF8     | libc            | English_India.1252 | English_India.1252 |        |           | =c/postgres          +
           |          |          |                 |                    |                    |        |           | postgres=CTc/postgres
 template1 | postgres | UTF8     | libc            | English_India.1252 | English_India.1252 |        |           | =c/postgres          +
           |          |          |                 |                    |                    |        |           | postgres=CTc/postgres
 testdb    | postgres | UTF8     | libc            | English_India.1252 | English_India.1252 |        |           |
(6 rows)


postgres=# \c arinfotek
You are now connected to database "arinfotek" as user "postgres".
arinfotek=# \d
                      List of relations
 Schema |             Name              |   Type   |  Owner
--------+-------------------------------+----------+----------
 public | interns                       | table    | postgres
 public | interns_intern_id_seq         | sequence | postgres
 public | internships                   | table    | postgres
 public | internships_internship_id_seq | sequence | postgres
(4 rows)


arinfotek=# \d
                      List of relations
 Schema |             Name              |   Type   |  Owner
--------+-------------------------------+----------+----------
 public | interns                       | table    | postgres
 public | interns_intern_id_seq         | sequence | postgres
 public | internships                   | table    | postgres
 public | internships_internship_id_seq | sequence | postgres
(4 rows)


arinfotek=# \d interns
                                              Table "public.interns"
     Column     |            Type             | Collation | Nullable |                  Default
----------------+-----------------------------+-----------+----------+--------------------------------------------
 intern_id      | integer                     |           | not null | nextval('interns_intern_id_seq'::regclass)
 full_name      | character varying(100)      |           | not null |
 email          | character varying(100)      |           | not null |
 contact_number | character varying(15)       |           |          |
 college_name   | character varying(150)      |           |          |
 degree         | character varying(50)       |           |          |
 branch         | character varying(100)      |           |          |
 year           | character varying(50)       |           |          |
 status         | character varying(30)       |           |          | 'Active'::character varying
 created_at     | timestamp without time zone |           |          | CURRENT_TIMESTAMP
Indexes:
    "interns_pkey" PRIMARY KEY, btree (intern_id)
    "interns_email_key" UNIQUE CONSTRAINT, btree (email)


arinfotek=# \d intenships
Did not find any relation named "intenships".
arinfotek=# \d internships
                                                 Table "public.internships"
      Column      |            Type             | Collation | Nullable |                      Default
------------------+-----------------------------+-----------+----------+----------------------------------------------------
 internship_id    | integer                     |           | not null | nextval('internships_internship_id_seq'::regclass)
 full_name        | character varying(100)      |           |          |
 dob              | date                        |           |          |
 gender           | character varying(20)       |           |          |
 contact          | character varying(20)       |           |          |
 alternate_number | character varying(20)       |           |          |
 address          | text                        |           |          |
 college_name     | character varying(150)      |           |          |
 degree           | character varying(50)       |           |          |
 branch           | character varying(100)      |           |          |
 year             | character varying(20)       |           |          |
 semester         | character varying(20)       |           |          |
 student_id       | character varying(50)       |           |          |
 email            | character varying(150)      |           |          |
 created_at       | timestamp without time zone |           |          | CURRENT_TIMESTAMP
Indexes:
    "internships_pkey" PRIMARY KEY, btree (internship_id)


arinfotek=#
