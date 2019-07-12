const getState = ({ getStore, setStore }) => {
	return {
		store: {
			events: [],
			meetups: [],
			session: {}
		},
		actions: {}
	};
};

export default getState;
