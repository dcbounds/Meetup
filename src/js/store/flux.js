const getState = ({ getStore, setStore }) => {
	return {
		store: {
            events:[],
            meetups: [],
        },
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire meet array to look for the respective index
				//and change its color
				const meetups = store.meetups.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ meetups: meetups });
			}
		}
	};
};

export default getState;
