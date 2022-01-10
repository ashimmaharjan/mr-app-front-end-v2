import { API } from '../../config';


//AUTHENTICATION
export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("spellAuthenticateJWT", JSON.stringify(data));
        next();
    }
};

export const signOut = (next) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("spellAuthenticateJWT");
        next();
        return fetch(`${API}/logout`, {
            method: "GET",
        })
            .then((response) => {
                console.log("logout", response);
            })
            .catch((err) => console.log(err));
    }
};

export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("spellAuthenticateJWT")) {
        return JSON.parse(localStorage.getItem("spellAuthenticateJWT"));
    } else {
        return false;
    }
};

//listing all users
export const allUsers = () => {
    return fetch(`${API}/admin/list-all-users`, {
        method: "GET",
        'Content-Type': 'application/json',
        Accept: 'application/json'
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};



//REGISTRATION
export const register = (token, data) => {
    return fetch(`${API}/register-user`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    })
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        })
}


//SIGN-IN
export const signIn = (data) => {
    return fetch(`${API}/sign-in`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        })
}

//
export const CreateRole = (data) => {
    return fetch(`${API}/admin/create-role`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })

        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        })
}

export const AllRoles = () => {
    return fetch(`${API}/admin/roles`, {
        method: "GET",
    })
        .then((res) => {
            res.json();
        })
        .catch((error) => {
            console.log(error);
        })
}


export const createPermission = (data) => {
    return fetch(`${API}/admin/create-permission`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })

        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        })
}

export const ListPermission = () => {
    return fetch(`${API}/admin/list-permission`, {
        method: "GET",
    })
        .then((res) => {
            res.json();
        })
        .catch((error) => {
            console.log(error);
        })
}

export const assignPermissionToRoles = (data) => {
    return fetch(`${API}/admin/assign-roles-permission`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })

        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        })
};

export const listOfPermissionOfRoles = (roleId) => {
    return fetch(`${API}/admin/list-roles-permission/${roleId}`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const addUserRoles = (data) => {
    return fetch(`${API}/admin/add-roles-to-user`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })

        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        })
};


export const listUserRoles = (userId) => {
    return fetch(`${API}/admin/list-user-roles/${userId}`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};


export const listUserPermission = (userId) => {
    return fetch(`${API}/admin/list-user-permission/${userId}`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const removePermissionOfRoles = (data) => {
    return fetch(`${API}/admin/remove-roles-permission`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })

        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        })
};

// //api for deleting Service
// export const deleteRoles = (roleId, adminId, token) => {
//     return fetch(`${API}/admin/remove-role/${serviceId}`, {
//       method: "DELETE",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .catch((err) => console.log(err));
//   };



//-------------> Stockiest API <--------------------//

//REGISTRATION
export const addStockiest = (token, data) => {
    return fetch(`${API}/admin/add-stockiest`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    })
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        })
}

export const listStockiest = (token) => {
    return fetch(`${API}/admin/list-stockiest`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};



//---------------> Doctors API <-------------------//
export const addDoctor = (token, data) => {
    return fetch(`${API}/admin/add-doctor`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    })
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        })
}

export const listDoctors = (token) => {
    return fetch(`${API}/admin/list-doctors`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};



//--------------> Chemist API <-------------------//
export const addChemist = (token, data) => {
    return fetch(`${API}/admin/add-chemist`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    })
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        })
}

export const listChemist = (token) => {
    return fetch(`${API}/admin/list-chemists`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};
