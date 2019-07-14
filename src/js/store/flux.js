const getState = ({ getStore, setStore }) => {
	return {
		store: {
			events: [],
			meetups: [],
			session: {}
		},
		actions: {
			findMeetups: meetID => {
				const store = getStore();
				if (store.meetups !== []) {
					let meet = store.meetups.filter((item, index) => {
						if (item.ID == meetID) {
							return item;
						}
					});
					if (meet[0] !== undefined) {
						return meet[0].post_title;
					}
				}
			},
			findEvents: eventsID => {
				const store = getStore();
				if (store.events !== []) {
					let event = store.events.filter((item, index) => {
						if (item.ID == eventsID) {
							return item;
						}
					});
					if (event[0] !== undefined) {
						return event[0];
					}
				}
			}
		}
	};
};

export default getState;
