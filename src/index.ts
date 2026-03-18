const profile = {
  "email": "ckck@gmail.com",
  "password": "a123456"
};


const autoLogin = async () => {
  const { email, password } = profile;


  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });


  if (!response.ok) {
    throw new Error();
  }



}

await autologin()
