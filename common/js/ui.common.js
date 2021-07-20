;
(function ($, win, doc, undefined) {

	'use strict';
	console.log('mobile common');
	var menuArray = {
		"menu": [{
				"name": "캠페인",
				"link": "/#",
				"dep2": [{
						"name": "특별모금",
						"link": "/#",
						"dep3": [{
							"name": "지회별 이벤트 모금",
							"link": "/#"
						}]
					},
					{
						"name": "크라우드 펀딩",
						"link": "/#",
						"dep3": [{
								"name": "펀딩 신청하기",
								"link": "/#"
							},
							{
								"name": "진행중인 펀딩",
								"link": "/#"
							},
							{
								"name": "종료된 펀딩",
								"link": "/#"
							}
						]
					},
					{
						"name": "나눔캠페인",
						"link": "/#",
						"dep3": [{
								"name": "희망나눔캠페인(연말)",
								"link": "/#"
							},
							{
								"name": "소다수캠페인(연중)",
								"link": "/#"
							}
						]
					}
				]
			},
			{
				"name": "기부",
				"link": "/#",
				"dep2": [{
						"name": "정기기부",
						"link": "/#",
						"dep3": [{
								"name": "매월기부",
								"link": "/#"
							},
							{
								"name": "착한가정",
								"link": "/#"
							},
							{
								"name": "착한가게",
								"link": "/#"
							},
							{
								"name": "착한일터",
								"link": "/#"
							}
						]
					},
					{
						"name": "일시기부",
						"link": "/#",
						"dep3": [{
								"name": "카드/계좌이체/포인트",
								"link": "/#",
								"dep4": [{
										"name": "개인",
										"link": "/#"
									},
									{
										"name": "법인",
										"link": "/#"
									}
								]
							},
							{
								"name": "ARS/문자",
								"link": "/#",
								"dep4": [{
										"name": "개인",
										"link": "/#"
									},
									{
										"name": "법인",
										"link": "/#"
									}
								]
							}
						]
					},
					{
						"name": "기부참여방법",
						"link": "/#",
						"dep3": [{
								"name": "착한가정",
								"link": "/#"
							},
							{
								"name": "착한가게",
								"link": "/#"
							},
							{
								"name": "착한일터",
								"link": "/#"
							},
							{
								"name": "나눔리더",
								"link": "/#"
							},
							{
								"name": "나눔리더스 클럽",
								"link": "/#"
							},
							{
								"name": "아너 소사이어티",
								"link": "/#"
							},
							{
								"name": "기부자 맞춤기금",
								"link": "/#"
							},
							{
								"name": "유산기부",
								"link": "/#"
							},
							{
								"name": "희망자산나눔",
								"link": "/#"
							},
							{
								"name": "현물기부",
								"link": "/#"
							}
						]
					},
					{
						"name": "기업사회공헌",
						"link": "/#",
						"dep3": [{
								"name": "사회공헌 성금기부",
								"link": "/#"
							},
							{
								"name": "사회공헌 현물기부",
								"link": "/#"
							},
							{
								"name": "공익연계 마케팅",
								"link": "/#"
							},
							{
								"name": "나눔명문기업",
								"link": "/#"
							}
						]
					}
				]
			},
			{
				"name": "사업",
				"link": "/#",
				"dep2": [{
						"name": "지원사업",
						"link": "/#",
						"dep3": [{
								"name": "영역별 지원",
								"link": "/#"
							},
							{
								"name": "나눔과 변화 스토리",
								"link": "/#"
							},
							{
								"name": "지원안내",
								"link": "/#"
							},
							{
								"name": "온라인 배분신청",
								"link": "/#"
							}
						]
					},
					{
						"name": "나눔문화 활성화",
						"link": "/#",
						"dep3": [{
								"name": "나눔문화연구소",
								"link": "/#"
							},
							{
								"name": "UWW아태교육센터",
								"link": "/#"
							},
							{
								"name": "소통과 협력",
								"link": "/#"
							},
							{
								"name": "어린이 나눔체험관",
								"link": "/#"
							},
							{
								"name": "나눔교육",
								"link": "/#"
							}
						]
					},
					{
						"name": "나눔봉사",
						"link": "/#",
						"dep3": [{
								"name": "1318청소년캠프",
								"link": "/#"
							},
							{
								"name": "톡톡서포터즈",
								"link": "/#"
							},
							{
								"name": "나눔봉사단",
								"link": "/#"
							}
						]
					}
				]
			},
			{
				"name": "사랑의 열매",
				"link": "/#",
				"dep2": [{
						"name": "소개",
						"link": "/#",
						"dep3": [{
								"name": "사랑의열매는",
								"link": "/#"
							},
							{
								"name": "인사말",
								"link": "/#"
							},
							{
								"name": "조직소개",
								"link": "/#"
							},
							{
								"name": "CI소개",
								"link": "/#"
							},
							{
								"name": "사업성과",
								"link": "/#"
							},
							{
								"name": "함께하는 사람들",
								"link": "/#"
							},
							{
								"name": "걸어온 길",
								"link": "/#"
							},
							{
								"name": "언론보도",
								"link": "/#"
							},
							{
								"name": "홍보대사",
								"link": "/#"
							},
							{
								"name": "홍보영상&인쇄물",
								"link": "/#"
							}
						]
					},
					{
						"name": "안내",
						"link": "/#",
						"dep3": [{
								"name": "공지사항",
								"link": "/#"
							},
							{
								"name": "FAQ",
								"link": "/#"
							}
						]
					},
					{
						"name": "신뢰와 투명성",
						"link": "/#",
						"dep3": [{
								"name": "시민참여위원회",
								"link": "/#"
							},
							{
								"name": "경영공시",
								"link": "/#"
							},
							{
								"name": "시민제안/사이버신문고",
								"link": "/#"
							}
						]
					}
				]
			}
		]
	};
	var menuArrayF = {
		"menu": [{
				"name": "기부참여 안내",
				"link": "/#",
				"dep2": [{
						"name": "첫 기부 가이드",
						"link": "/#"
					},
					{
						"name": "나의 기부 설계",
						"link": "/#"
					},
					{
						"name": "기부 FAQ",
						"link": "/#",
						"dep3": [{
								"name": "참여 안내",
								"link": "/#"
							},
							{
								"name": "기부금 세금공제 안내",
								"link": "/#"
							}
						]
					},
					{
						"name": "나의 기부",
						"link": "/#",
						"dep3": [{
								"name": "기부내역 조회",
								"link": "/#"
							},
							{
								"name": "기부확인서 신청/발급",
								"link": "/#"
							},
							{
								"name": "기부 상담(나눔콜센터)",
								"link": "/#"
							}
						]
					}
				]
			},
			{
				"name": "기부자 그룹",
				"link": "/#",
				"dep2": [{
						"name": "아너 소사이어티",
						"link": "/#",
						"dep3": [{
								"name": "아너 소사이어티란",
								"link": "/#"
							},
							{
								"name": "걸어온 길",
								"link": "/#"
							},
							{
								"name": "현황",
								"link": "/#"
							},
							{
								"name": "참여안내",
								"link": "/#"
							},
							{
								"name": "회원소개",
								"link": "/#"
							}
						]
					},
					{
						"name": "W아너 소사이어티",
						"link": "/#",
						"dep3": [{
								"name": "W아너 소사이어티란",
								"link": "/#"
							},
							{
								"name": "걸어온 길",
								"link": "/#"
							},
							{
								"name": "현황",
								"link": "/#"
							}
						]
					},
					{
						"name": "레거시클럽",
						"link": "/#"
					},
					{
						"name": "나눔명문기업",
						"link": "/#"
					}
				]
			},
			{
				"name": "SNS",
				"link": "/#",
				"dep2": [{
						"name": "페이스북",
						"link": "/#"
					},
					{
						"name": "인스타그램",
						"link": "/#"
					},
					{
						"name": "블로그",
						"link": "/#"
					},
					{
						"name": "유튜브",
						"link": "/#"
					}
				]
			},
			{
				"name": "각종 신청",
				"link": "/#",
				"dep2": [{
						"name": "온라인 배분신청",
						"link": "/#"
					},
					{
						"name": "나눔체험관 견학 신청",
						"link": "/#"
					},
					{
						"name": "기관방문 신청",
						"link": "/#"
					},
					{
						"name": "대관 신청",
						"link": "/#"
					},
					{
						"name": "관람 신청",
						"link": "/#"
					},
				]
			},
			{
				"name": "사이트맵",
				"link": "/#"
			}

		]
	};

	$plugins.common = {
		init: function (opt) {

			$plugins.uiInputClear();
			$plugins.uiCaption();

			(!$plugins.browser.mobile) ? $plugins.uiSelect(): '';

			$(win).on('scroll', function () {
				scrollChange($(win).scrollTop());
			});

			$plugins.uiHasScrollBar({
				selector: $('body')
			}) ? $('html').addClass('is-scroll') : $('html').removeClass('is-scroll');

			function scrollChange(v) {
				var win_h = $(win).outerHeight();
				v > 0 ?
					$('body').addClass('scrolled') :
					$('body').removeClass('scrolled');

				v + win_h + 10 > $(doc).outerHeight() ?
					$('body').addClass('scrolled-b') :
					$('body').removeClass('scrolled-b');

				v > win_h / 2 ?
					$('body').addClass('scroll-top') :
					$('body').removeClass('scroll-top');
			}

			scrollChange($(win).scrollTop());

			$plugins.uiAjax({
				id: 'baseHeader',
				url: '/inc/header.html',
				page: true,
				callback: function () {
					$plugins.common.header(opt);
				}
			});

			$plugins.uiAjax({
				id: 'baseFooter',
				url: '/inc/footer.html',
				page: true,
				callback: function () {
					$plugins.common.footer(opt);
				}
			});

			$plugins.uiAjax({
				id: 'rightWing',
				url: '/inc/right_wing.html',
				page: true,
				callback: function () {
					(!$plugins.browser.mobile) ? $plugins.uiSelect(): '';
				}
			});
			$plugins.uiAjax({
				id: 'counselBox',
				url: '/inc/counsel.html',
				page: true,
				callback: function () {
					(!$plugins.browser.mobile) ? $plugins.uiSelect(): '';
				}
			});

			$plugins.common.uiToggleBtn();
		},
		uiToggleBtn: function () {
			$('.ui-togglebtn button').off('click.tg').on('click.tg', function () {
				$(this).closest('.ui-togglebtn').find('button').removeClass('btn-base-imp').addClass('btn-base');
				$(this).removeClass('btn-base').addClass('btn-base-imp')
			});
		},
		header: function (opt) {
			var $nav = $('#baseNav'),
				$li_1 = $nav.find('.nav-main-1'),
				$btn_1 = $nav.find('.nav-btn-1'),
				timer,
				menuType = opt.menuType,
				menucode = opt.menuid.split('_');

			console.log(Number(menucode[0]))

			$('.ui-menu').on('click', function () {
				$('.header-mobile').addClass('on');
			});
			$('.menu-wrap .btn-close').on('click', function () {
				$('.header-mobile').removeClass('on');
			});

			/*if(Number(menucode[0]) > 0) {
				$li_1.eq(Number(menucode[0]) - 1).find('.nav-btn-1').addClass('selected');
				$li_1.eq(Number(menucode[0]) - 1)
				.find('.nav-sub > div').eq(Number(menucode[1])).addClass('selected')
				.find('li').eq(Number(menucode[2]) - 1).find('a').addClass('selected');
			}*/
			if (Number(menucode[0]) > 0) {
				$li_1.eq(Number(menucode[0])).find('.nav-btn-1').addClass('selected');
				$li_1.eq(Number(menucode[0]))
					.find('.nav-sub > div').eq(Number(menucode[1])).addClass('selected')
					.find('li').eq(Number(menucode[2])).find('a').addClass('selected');
			}


			$btn_1.on('mouseover focus', function () {
				clearTimeout(timer);
				$plugins.common.navShow(this);
			}).on('mouseleave blur', function () {
				hideTimer();
			});
			$('.nav-sub, .nav-sub a').on('mouseover focus', function () {
				clearTimeout(timer);
			}).on('mouseleave blur', function () {
				hideTimer();
			});

			function hideTimer() {
				timer = setTimeout(function () {
					$plugins.common.navHide();
				}, 200);
			}
			console.log(menucode[3])
			var menu4dep = menucode[3] === undefined ? false : menucode[3];
			if ($('#baseBreadcrumbs').length) {
				$plugins.uiAjax({
					id: 'baseBreadcrumbs',
					url: '/inc/breadcrumbs.html',
					page: true,
					callback: function () {
						$plugins.common.breadCrumbs(menucode[0], menucode[1], menucode[2], menu4dep, menuType);
					}
				});

			}


			$plugins.uiDropdown({
				id: 'uiNavUtil1',
				ps: 'bc',
				eff: 'st'
			});
			$plugins.uiDropdown({
				id: 'uiNavUtil2',
				ps: 'bc',
				eff: 'st'
			});

			$plugins.uiDropdown({
				id: 'uiNavUtil1_m',
				ps: 'bc',
				eff: 'st'
			});
			$plugins.uiDropdown({
				id: 'uiNavUtil2_m',
				ps: 'bc',
				eff: 'st'
			});

			$plugins.uiAccordion({
				id: 'AccoNavDepth1',
				current: null,
				autoclose: true,
				callback: function (v) {
					console.log(v)
				}
			});
			$plugins.uiAccordion({
				id: 'AccoNavDepth2-1',
				current: null,
				autoclose: true,
				callback: function (v) {
					console.log(v)
				}
			});
			$plugins.uiAccordion({
				id: 'AccoNavDepth2-2',
				current: null,
				autoclose: true,
				callback: function (v) {
					console.log(v)
				}
			});
			$plugins.uiAccordion({
				id: 'AccoNavDepth2-3',
				current: null,
				autoclose: true,
				callback: function (v) {
					console.log(v)
				}
			});
			$plugins.uiAccordion({
				id: 'AccoNavDepth2-4',
				current: null,
				autoclose: true,
				callback: function (v) {
					console.log(v)
				}
			});


		},
		navShow: function (t) {
			$(t).closest('.nav-main-1').siblings('li').find('.nav-btn-1').data('selected', false);
			if (!$(t).data('selected')) {
				$(t).data('selected', true);
				$('.nav-main-1').removeClass('on');
				$('.nav-sub').css({
					height: 0,
					opacity: 0
				})
				$(t).closest('.nav-main-1').addClass('on').find('.nav-sub').stop().animate({
					height: 415,
					opacity: 1
				}, 200);

				$('.dim-nav').addClass('on').stop().animate({
					top: 121,
					height: 420
				}, 150)
			}

		},
		navHide: function () {
			$('.nav-btn-1').data('selected', false);
			$('.nav-main-1').removeClass('on').find('.nav-sub').stop().animate({
				height: 0,
				opacity: 0
			}, 150);
			$('.dim-nav').removeClass('on').stop().animate({
				top: 121,
				height: 0
			}, 200)
		},
		breadCrumbs: function (dep1, dep2, dep3, dep4, is) {
			var ma = menuArray.menu,
				d1 = Number(dep1),
				d2 = Number(dep2),
				d3 = Number(dep3),
				d4 = dep4 === false ? false : Number(dep4),
				html_dep1 = '',
				html_dep2 = '',
				html_dep3 = '',
				html_dep4 = '';

			is === 'footer' ? ma = menuArrayF.menu : '';

			html_dep1 += '<button type="button" class="breadcrumb-btn ui-drop" id="uiNavDep1">' + ma[d1].name + '</button>';
			html_dep1 += '<div class="ui-drop-pnl breadcrumb-list" data-id="uiNavDep1">';
			html_dep1 += '<ul>';

			for (var i = 0; i < ma.length; i++) {
				if (d1 === i) {
					html_dep1 += '<li><a href="' + ma[i].link + '" class="selected">' + ma[i].name + '</a></li>';
				} else {
					html_dep1 += '<li><a href="' + ma[i].link + '">' + ma[i].name + '</a></li>';
				}

			}
			html_dep1 += '</ul>';
			html_dep1 += '</div>';
			$('#breadcrumbDep1').append(html_dep1);
			$plugins.uiDropdown({
				id: 'uiNavDep1',
				ps: 'bc',
				eff: 'st',
				auto: false,
				dim: false,
				openback: function () {
					console.log('open callback');
				},
				closeback: function () {
					console.log('close callback');
				},
				offset: false
			});

			if (ma[d1].dep2 !== undefined) {
				html_dep2 += '<button type="button" class="breadcrumb-btn ui-drop" id="uiNavDep2">' + ma[d1].dep2[d2].name + '</button>';
				html_dep2 += '<div class="ui-drop-pnl breadcrumb-list" data-id="uiNavDep2">';
				html_dep2 += '<ul>';

				for (var ii = 0; ii < ma[d1].dep2.length; ii++) {
					if (d2 === ii) {
						html_dep2 += '<li><a href="' + ma[d1].dep2[ii].link + '" class="selected">' + ma[d1].dep2[ii].name + '</a></li>';
					} else {
						html_dep2 += '<li><a href="' + ma[d1].dep2[ii].link + '">' + ma[d1].dep2[ii].name + '</a></li>';
					}
				}
				html_dep2 += '</ul>';
				html_dep2 += '</div>';
				$('#breadcrumbDep2').append(html_dep2);
				$plugins.uiDropdown({
					id: 'uiNavDep2',
					ps: 'bc',
					eff: 'st',
					auto: false,
					dim: false,
					openback: function () {
						console.log('open callback');
					},
					closeback: function () {
						console.log('close callback');
					},
					offset: false
				});


				if (ma[d1].dep2[d2].dep3 !== undefined) {
					html_dep3 += '<button type="button" class="breadcrumb-btn ui-drop" id="uiNavDep3">' + ma[d1].dep2[d2].dep3[d3].name + '</button>';
					html_dep3 += '<div class="ui-drop-pnl breadcrumb-list" data-id="uiNavDep3">';
					html_dep3 += '<ul>';

					for (var iii = 0; iii < ma[d1].dep2[d2].dep3.length; iii++) {
						if (d3 === iii) {
							html_dep3 += '<li><a href="' + ma[d1].dep2[d2].dep3[iii].link + '" class="selected">' + ma[d1].dep2[d2].dep3[iii].name + '</a></li>';
						} else {
							html_dep3 += '<li><a href="' + ma[d1].dep2[d2].dep3[iii].link + '">' + ma[d1].dep2[d2].dep3[iii].name + '</a></li>';
						}
					}
					html_dep3 += '</ul>';
					html_dep3 += '</div>';
					$('#breadcrumbDep3').append(html_dep3);
					$plugins.uiDropdown({
						id: 'uiNavDep3',
						ps: 'bc',
						eff: 'st',
						auto: false,
						dim: false,
						openback: function () {
							console.log('open callback');
						},
						closeback: function () {
							console.log('close callback');
						},
						offset: false
					});
					if (ma[d1].dep2[d2].dep3[d3].dep4 !== undefined && d4 !== false) {
						html_dep4 += '<button type="button" class="breadcrumb-btn ui-drop" id="uiNavDep4">' + ma[d1].dep2[d2].dep3[d3].dep4[d4].name + '</button>';
						html_dep4 += '<div class="ui-drop-pnl breadcrumb-list" data-id="uiNavDep4">';
						html_dep4 += '<ul>';

						for (var iiii = 0; iiii < ma[d1].dep2[d2].dep3[d3].dep4.length; iiii++) {
							if (d3 === iiii) {
								html_dep4 += '<li><a href="' + ma[d1].dep2[d2].dep3[d3].dep4[iiii].link + '" class="selected">' + ma[d1].dep2[d2].dep3[d3].dep4[iiii].name + '</a></li>';
							} else {
								html_dep4 += '<li><a href="' + ma[d1].dep2[d2].dep3[d3].dep4[iiii].link + '">' + ma[d1].dep2[d2].dep3[d3].dep4[iiii].name + '</a></li>';
							}
						}
						html_dep4 += '</ul>';
						html_dep4 += '</div>';
						$('#breadcrumbDep4').append(html_dep4);
						$plugins.uiDropdown({
							id: 'uiNavDep4',
							ps: 'bc',
							eff: 'st',
							auto: false,
							dim: false,
							openback: function () {
								console.log('open callback');
							},
							closeback: function () {
								console.log('close callback');
							},
							offset: false
						});
					}
				}
			}
		},

		footer: function () {
			console.log('footer');
		}
	};
	//page
	$plugins.page = {}

	//callback
	$plugins.callback = {
		modal: function (modalId) {
			$plugins.uiInputClear();
			$plugins.uiCaption();
			(!$plugins.browser.mobile) ? $plugins.uiSelect(): '';

			switch (modalId) {
				case 'modalTest2':

					break;
			}
		}
	}
})(jQuery, window, document);