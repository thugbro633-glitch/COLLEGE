function showDepartmentDetails(department) {
    let details = "";
    
    switch(department) {
        case 'CSE':
            details = `
                <h2>Computer Science Engineering (CSE)</h2>
                <p>Department Head: Dr. Mark Zuckerberg</p>
                <p>Courses Offered: Data Structures, Algorithms, Machine Learning, etc.</p>
                <p>Facilities: Labs, Coding Bootcamps, Workshops, Research Projects</p>
            `;
            break;
        case 'ECE':
            details = `
                <h2>Electronics & Communication Engineering (ECE)</h2>
                <p>Department Head: Dr. Satoshi Nakamoto</p>
                <p>Courses Offered: Digital Signal Processing, Embedded Systems, Circuit Theory, etc.</p>
                <p>Facilities: Electronics Labs, Workshop, Research Facilities</p>
            `;
            break;
        case 'ME':
            details = `
                <h2>Mechanical Engineering (ME)</h2>
                <p>Department Head: Prof. Elon Musk</p>
                <p>Courses Offered: Thermodynamics, Fluid Mechanics, CAD, Robotics, etc.</p>
                <p>Facilities: Workshop, 3D Printers, CAD Labs</p>
            `;
            break;
        default:
            details = "<p>Please select a department to view details.</p>";
    }
    
    document.getElementById("department-details").innerHTML = details;
}
