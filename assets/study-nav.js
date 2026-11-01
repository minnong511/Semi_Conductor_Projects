(() => {
  const pages = [
    { folder: 'project1_process_analysis', number: '01', label: '공정 이해' },
    { folder: 'project2_recipe_optimization', number: '02', label: '조건 최적화' },
    { folder: 'project3_virtual_metrology', number: '03', label: '가상계측' }
  ];
  const current = pages.findIndex(page => location.pathname.includes(page.folder));
  if (current < 0) return;
  const href = page => `../${page.folder}/02_도메인_학습.html`;
  const navigation = document.createElement('nav');
  navigation.className = 'study-nav';
  navigation.setAttribute('aria-label', '프로젝트 학습 단계');
  const brand = document.createElement('div');
  brand.className = 'study-nav__brand';
  brand.innerHTML = '<span class="study-nav__mark" aria-hidden="true">◼</span><span>PROCESS<br>STUDIES</span>';
  const links = document.createElement('div');
  links.className = 'study-nav__links';
  pages.forEach((page, index) => {
    const link = document.createElement('a');
    link.href = href(page);
    if (index === current) link.setAttribute('aria-current', 'page');
    const number = document.createElement('span'); number.textContent = page.number;
    const label = document.createElement('strong'); label.textContent = page.label;
    link.append(number, label); links.appendChild(link);
  });
  navigation.append(brand, links);
  const header = document.querySelector('header');
  if (header) header.parentNode.insertBefore(navigation, header);
  const main = document.querySelector('main');
  if (main) {
    const bottom = document.createElement('nav');
    bottom.className = 'study-next';
    bottom.setAttribute('aria-label', '이전 및 다음 프로젝트');
    [[current - 1, '이전'], [current + 1, '다음']].forEach(([index, direction]) => {
      if (!pages[index]) return;
      const link = document.createElement('a');
      link.href = href(pages[index]);
      link.textContent = `${direction}  /  ${pages[index].number} ${pages[index].label}`;
      bottom.appendChild(link);
    });
    main.appendChild(bottom);
  }
})();
