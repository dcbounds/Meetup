const getState = ({ getStore, setStore }) => {
	return {
		store: {
			meet: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire meet array to look for the respective index
				//and change its color
				const meet = store.meet.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ meet: meet });
			}
		}
	};
};

export default getState;
