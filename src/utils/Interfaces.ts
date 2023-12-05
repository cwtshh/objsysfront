interface Student {
    name: string;
    email: string;
    matricula: string;
}

interface Group {
    name: string;
    description: string;
    students: Array<Student>;
    lider: string;
}