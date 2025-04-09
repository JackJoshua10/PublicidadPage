const previews = document.getElementById('previews');
const tabs = document.getElementById('tabs');

tabs.addEventListener('click', (e) => {
	e.preventDefault();

	const selectedTab = e.target.closest('.tab');
	if (selectedTab) {
		const id = selectedTab.dataset.id;

		previews.querySelector('.active').classList.remove('active');
		previews.querySelector(`[data-id="${id}"]`).classList.add('active');

		tabs.querySelector('.active').classList.remove('active');
		tabs.querySelector(`[data-id="${id}"]`).classList.add('active');
	}
});
