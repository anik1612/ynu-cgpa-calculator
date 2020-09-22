function handleSubmit (){
    const sem_1_cr = document.getElementById("sem-1-cr").value;
    const sem_2_cr = document.getElementById('sem-2-cr').value;
    const sem_3_cr = document.getElementById('sem-3-cr').value;
    const sem_4_cr = document.getElementById('sem-4-cr').value;
    const sem_5_cr = document.getElementById('sem-5-cr').value;
    const sem_6_cr = document.getElementById('sem-6-cr').value;
    const sem_7_cr = document.getElementById('sem-7-cr').value;
    const sem_8_cr = document.getElementById('sem-8-cr').value;
    const sem_1_gpa = document.getElementById('sem-1-gpa').value;
    const sem_2_gpa = document.getElementById('sem-2-gpa').value;
    const sem_3_gpa = document.getElementById('sem-3-gpa').value;
    const sem_4_gpa = document.getElementById('sem-4-gpa').value;
    const sem_5_gpa = document.getElementById('sem-5-gpa').value;
    const sem_6_gpa = document.getElementById('sem-6-gpa').value;
    const sem_7_gpa = document.getElementById('sem-7-gpa').value;
    const sem_8_gpa = document.getElementById('sem-8-gpa').value;

    const avgGpa = (parseFloat(sem_1_cr * sem_1_gpa) + parseFloat(sem_2_cr * sem_2_gpa) + parseFloat(sem_3_cr * sem_3_gpa) + parseFloat(sem_4_cr * sem_4_gpa) + parseFloat(sem_5_cr * sem_5_gpa) + parseFloat(sem_6_cr * sem_6_gpa) + parseFloat(sem_7_cr * sem_7_gpa) + parseFloat(sem_8_cr * sem_8_gpa))

    const totalCredits = (parseFloat(sem_1_cr) + parseFloat(sem_2_cr) + parseFloat(sem_3_cr) + parseFloat(sem_4_cr) + parseFloat(sem_5_cr) + parseFloat(sem_6_cr) + parseFloat(sem_7_cr) + parseFloat(sem_8_cr))

    const totalCgpa = (avgGpa/totalCredits);

    displayCgpa(totalCgpa);    
}

function displayCgpa(totalCgpa) {
    const result = document.getElementById('result');
    result.value = totalCgpa.toFixed(2);
} 
