const getState = ({ getStore, setStore }) => {
	return {
		store: {
			events: [],
			meetups: []
		},
		actions: {
			findMeetups: meetID => {
				const store = getStore();
				if (store.meetups !== []) {
					const meet = store.meetups.filter((item, index) => {
						if (item.ID == meetID) {
							return item;
						}
					});
					if (meet[0] !== undefined) {
						return meet[0];
					}
				}
			},
			findEvents: eventsID => {
				const store = getStore();
				if (store.events !== []) {
					const event = store.events.filter((item, index) => {
						if (item.ID == eventsID) {
							return item;
						}
					});
					if (event[0] !== undefined) {
						return event[0];
					}
				}
			},
              findMeetupEvents: meetID => {
                let store = getStore();
                return store.events.filter (eventfilter => eventfilter.meta_keys._meetup === meetID);
            }

		}
	};
};

export default getState;
