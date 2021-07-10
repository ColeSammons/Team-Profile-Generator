const generateManager = function (manager) {
    const { name, id, email, officeNumber } = manager[0];
    return `
    <div class="card p-0 shadow m-3" style="width: 18rem; ">
                <div class="card-body text-light bg-secondary">
                    <h5 class="card-title text-center">${name}</h5>
                    <h5 class="card-title text-center">Manager</h5>
                </div>
                <div class="mx-3 my-4">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">
                            <a href="mailto: ${email}" class="card-link">${email}</a>
                        </li>
                        <li class="list-group-item">Office number: ${officeNumber}</li>
                    </ul>
                </div>
            </div>`
}

const generateEngineer = function (engineer) {
    if(!engineer) {
        return '';
    }
    return engineer.map(({ name, id, email, github }) => {
        return `
    <div class="card p-0 shadow m-3" style="width: 18rem; ">
                <div class="card-body text-light bg-secondary">
                    <h5 class="card-title text-center">${name}</h5>
                    <h5 class="card-title text-center">Engineer</h5>
                </div>
                <div class="mx-3 my-4">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">
                            <a href="mailto: ${email}" class="card-link">Email: ${email}</a>
                        </li>
                        <li class="list-group-item">
                            Github: 
                            <a href="https://github.com/${github}" class="card-link" target="_blank">${github}</a>
                        </li>
                    </ul>
                </div>
            </div>`
    })
    .join('');
}

const generateIntern = function (intern) {
    if(!intern) {
        return '';
    }
    return intern.map(({ name, id, email, school }) => {
        return `
    <div class="card p-0 shadow m-3" style="width: 18rem; ">
                <div class="card-body text-light bg-secondary">
                    <h5 class="card-title text-center">${name}</h5>
                    <h5 class="card-title text-center">Intern</h5>
                </div>
                <div class="mx-3 my-4">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">
                            <a href="mailto: ${email}" class="card-link">Email: ${email}</a>
                        </li>
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                </div>
            </div>`
    })
    .join('');

}

const generatePage = function (manager, engineer, intern) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TeamBuilder</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
    <header>
        <h1 class="text-center bg-info text-light py-3">My Team</h1>
        <div class="row justify-content-center flex-wrap">
            ${generateManager(manager)}
            ${generateEngineer(engineer)}
            ${generateIntern(intern)}
        </div>
    </header>
</body>

</html>`
}

module.exports = { generatePage };

