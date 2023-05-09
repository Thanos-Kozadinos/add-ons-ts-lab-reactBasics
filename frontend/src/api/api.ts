export interface IInfo {
    dob: {
        age: string
    };
    name: {
        title: string
        first: string
        last: string
    };

    location:{
        street:{
            number: number;
            name: string; 
        };
        city: string;
        state: string;
        country: string;
        postcode: number;
    };

}

export interface IRandomUser {
    results: IInfo[];
    // name: 
}



export const getRandomUser = async () => {
    const randomUser: IRandomUser = await fetch(
      "https://randomuser.me/api/"
    )
      .then((response) => response.json())
      .then((data) => data);
    return randomUser;
  };