const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const postPhoto = "https://pbs.twimg.com/media/E2ym_7VWYAY_RFU?format=jpg&name=large"
const avatarPhoto = "https://pbs.twimg.com/profile_images/1348509746106671105/STdnNKB6_400x400.jpg"
const image='https://image.shutterstock.com/image-photo/unknown-male-person-silhouetteback-lit-260nw-235132504.jpg'


const initialState ={
    posts:[
        {
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader",
            content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
            image:RAY_IMAGE,
            date:"26 февр."
        },
         {
          name: "Typical programmer",
          photo: avatarPhoto,
          nickname: "@tproger",
          content:"When you try to choose a meaningful variable name:",
          image:postPhoto,
          date:" 15 сент."
        }
        ]
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'addNewPost': {
			return {
                ...state,
                posts: [
                    {
                    name: action.payload.postName,
                    photo: image,
                    nickname: `@${action.payload.postName.toLowerCase().replace(" ","_")}`,
                    content: action.payload.postText,
                    image: action.payload.postImage,
                    date: `${Date().slice(4, 10)}`,
                    },
                    ...state.posts
                ],
			};
		}
		default:
			return state;
	}
}

