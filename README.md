# CRUD Application

A simple CRUD (Create, Read, Update, Delete) application built using Java, Spring Boot, Spring Data JPA, and MySQL. This project demonstrates RESTful API development with database integration.

## 🚀 Features

- Create new records
- View all records
- View record by ID
- Update existing records
- Delete records
- RESTful API architecture
- MySQL database integration
- Exception handling
- Layered architecture (Controller, Service, Repository)

## 🛠️ Technologies Used

- Java 17
- Spring Boot
- Spring Data JPA
- MySQL
- Maven
- REST API
- Hibernate

## 📂 Project Structure

```
src
├── main
│   ├── java
│   │   ├── controller
│   │   ├── service
│   │   ├── repository
│   │   ├── entity
│   │   └── CrudApplication.java
│   └── resources
│       └── application.properties
└── test
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/crud-application.git
```

### Navigate

```bash
cd crud-application
```

### Configure Database

Update `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/crud_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
```

### Run Application

```bash
mvn spring-boot:run
```

Application runs on:

```
http://localhost:8080
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/items | Get All Records |
| GET | /api/items/{id} | Get Record By ID |
| POST | /api/items | Create Record |
| PUT | /api/items/{id} | Update Record |
| DELETE | /api/items/{id} | Delete Record |

---

## 📷 Sample JSON

### Create Record

```json
{
  "name": "John",
  "email": "john@example.com",
  "department": "IT"
}
```

---

## 🧪 Testing

You can test the APIs using:

- Postman
- Swagger (if enabled)
- cURL

---

## 📈 Future Improvements

- Authentication & Authorization
- JWT Security
- Pagination & Sorting
- Search & Filter
- Docker Support
- Unit Testing
- Swagger/OpenAPI Documentation

---

## 👩‍💻 Author

**Gayathri T**

GitHub: https://github.com/Gaya3inGithub

---

## 📄 License

This project is licensed under the MIT License.
