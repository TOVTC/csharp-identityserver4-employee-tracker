<template>
    <v-container>
      <v-row class="my-5">
        <v-col
          class="ma-5"
          cols="6"
        >
            <h2 class="headline font-weight-bold mb-3">
                Departments
            </h2>
            <v-data-table
                :headers="departmentHeaders"
                :items="departments"
                :items-per-page="10"
                class="elevation-1"
            ></v-data-table>
        </v-col>
        <v-col
          class="my-5"
          cols="6"
        >
            <h2 class="headline font-weight-bold mb-3">
                Roles
            </h2>
            <v-data-table
                :headers="roleHeaders"
                :items="transformedRoles"
                :items-per-page="10"
                class="elevation-1"
            ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'HomeView',
      data: () => ({
        departmentHeaders: [
            { text: "id", value: "id" },
            { text: "Department", value: "department_name" }
        ],
        roleHeaders: [
            { text: "id", value: "id" },
            { text: "Job Title", value: "job_title" },
            { text: "Salary", value: "salary" },
            { text: "Department", value: "dept_id" },
            { text: "Is Management", value: "is_management" }
        ],
        departments: [
            {
                "id": "6",
                "department_name": "Administration"
            },
            {
                "id": "1",
                "department_name": "Executive"
            },
            {
                "id": "4",
                "department_name": "Finance"
            },
            {
                "id": "7",
                "department_name": "Human Resources"
            },
            {
                "id": "3",
                "department_name": "Info Tech"
            },
            {
                "id": "2",
                "department_name": "Marketing"
            },
            {
                "id": "5",
                "department_name": "Operations"
            },
            {
                "id": "8",
                "department_name": "Public Relations"
            }
        ],
        roles: [
            {
                "id": "1",
                "job_title": "President",
                "salary": "70000",
                "dept_id": "1",
                "is_management": "1"
            },
            {
                "id": "2",
                "job_title": "Vice President",
                "salary": "60000",
                "dept_id": "1",
                "is_management": "1"
            },
            {
                "id": "3",
                "job_title": "Marketing Manager",
                "salary": "50000",
                "dept_id": "2",
                "is_management": "1"
            },
            {
                "id": "4",
                "job_title": "IT Manager",
                "salary": "55000",
                "dept_id": "3",
                "is_management": "1"
            },
            {
                "id": "5",
                "job_title": "Finance Manager",
                "salary": "50000",
                "dept_id": "4",
                "is_management": "1"
            },
            {
                "id": "6",
                "job_title": "Operations Manager",
                "salary": "50000",
                "dept_id": "5",
                "is_management": "1"
            },
            {
                "id": "7",
                "job_title": "Admin Assistant",
                "salary": "35000",
                "dept_id": "6",
                "is_management": "0"
            },
            {
                "id": "8",
                "job_title": "HR Rep",
                "salary": "35000",
                "dept_id": "7",
                "is_management": "0"
            },
            {
                "id": "9",
                "job_title": "PR Rep",
                "salary": "35000",
                "dept_id": "8",
                "is_management": "0"
            },
            {
                "id": "10",
                "job_title": "Marketing Rep",
                "salary": "35000",
                "dept_id": "2",
                "is_management": "0"
            },
            {
                "id": "11",
                "job_title": "Developer",
                "salary": "40000",
                "dept_id": "3",
                "is_management": "0"
            },
            {
                "id": "12",
                "job_title": "Accountant",
                "salary": "35000",
                "dept_id": "4",
                "is_management": "0"
            },
            {
                "id": "13",
                "job_title": "Data Clerk",
                "salary": "31000",
                "dept_id": "5",
                "is_management": "0"
            },
            {
                "id": "14",
                "job_title": "Customer Service",
                "salary": "31000",
                "dept_id": "5",
                "is_management": "0"
            },
            {
                "id": "15",
                "job_title": "Operations Attendant",
                "salary": "31000",
                "dept_id": "5",
                "is_management": "0"
            }
        ],
        transformedRoles: [],
      }),
      methods: {
        isManagement(bool) {
            return bool === "1" ? "yes" : "no"
        },
        formatSalary(salary) {
            const dollarUSLocale = Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
            });
            return `$${dollarUSLocale.format(salary)}`
        },
        findDepartment(deptId) {
            let department = this.departments.find(dept => dept.id === deptId)
            return department.department_name
        },
        formatRoles(roles) {
            roles.forEach(role => {
                this.transformedRoles.push({
                    "id": role.id,
                    "job_title": role.job_title,
                    "salary": this.formatSalary(role.salary),
                    "dept_id": this.findDepartment(role.dept_id),
                    "is_management": this.isManagement(role.is_management)
                })
            })
        }
      },
      async created() {
        this.formatRoles(this.roles)
      }
    }
  </script>
  