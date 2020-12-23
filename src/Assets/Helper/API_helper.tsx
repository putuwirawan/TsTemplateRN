import qs from 'qs';

type loginType = {
  userName: string;
  password: string;
};

export const Login = async (props: loginType) => {
  let data: any = null;

  await fetch('http://inventoryapi.planetsurf.id/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify({
      grant_type: 'password',
      username: props.userName,
      password: props.password,
    }),
  })
    .then((response) => response.json())
    .then((responJson) => {
      data = responJson;
    })

    .catch((e) => {
      console.log(e);
    });
  return data;
};
