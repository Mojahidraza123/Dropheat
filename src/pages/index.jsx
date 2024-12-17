import { Swiper, SwiperSlide } from 'swiper/react';
import LiveDropsCard from './components/cards/LiveDropsCard';
import { Button } from './components/helpers/ButtonHelper';
import HeroSection from './components/home/HeroSection';
import { DhIcon } from './components/helpers/IconHelper';
import { useEffect, useState } from 'react';
import { liveDropsData } from "./components/data";

export default function Home() {
	const [state, setState] = useState(1);
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(liveDropsData);
	}, []);
	return (
		<>
			<div className="live-drops-wrapper">
				<div className="live-drops-heading">
					<h3><span className="dots"></span> Live drops</h3>
				</div>
				<div className="live-drops-slider">
					<Swiper
						slidesPerView='auto'
						spaceBetween={6}
						className="mySwiper"
					>
						{
							data && data?.map((item, index) => {
								return (
									<SwiperSlide><LiveDropsCard key={index} item={item} /></SwiperSlide>
								)
							})
						}
					</Swiper>
				</div>
			</div >
			{/* hero start  */}
			<HeroSection />
			{/* Featured start  */}
			<div className="feature-container py-20">
				<div className="heading-wrapper">
					<div className="heading-left">
						<h3>
							<img src="/images/feature-icon.svg" alt="" />
							Featured Boxes
						</h3>
					</div>
					<div className="heading-mid">
						<div className="feature-tabs">
							<button className={`feature-tab-link ${state === 1 && 'active'}`} onClick={() => setState(1)}>Featured</button>
							<button className={`feature-tab-link ${state === 2 && 'active'}`} onClick={() => setState(2)}>New Boxes</button>
							<button className={`feature-tab-link ${state === 3 && 'active'}`} onClick={() => setState(3)}>Top Boxes</button>
						</div>
					</div>
					<div className="heading-right">
						<div className="feature-short dropdown">
							<span>Sort by:</span>
							<button className="feature-short-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Price
								<DhIcon name='arrowDown' />
							</button>
							<ul className="dropdown-menu dropdown-menu-end">
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="heading-card-wrapper">
					<ul className="feature-card-list d-grid">
						{
							Array(10).fill(null).map((_, i) => {
								return (
									<li className="feature-card-item" key={i}>
										<div className="feature-card-badges">
											<span className='feature-card-badge new'>New</span>
											<span className='feature-card-badge hot'>Hot</span>
											<span className='feature-card-badge popular'>Popular</span>
										</div>
										<div className="feature-card-thumb">
											<img src="/images/feature-img.png" alt="" />
										</div>
										<div className="feature-card-content">
											<h4>Crazy Designers</h4>
											<div className="feature-card-tags">
												<span>Streetwear</span>
												<span>Watches</span>
											</div>
											<h4>$390.<span>00</span></h4>
										</div>
										<div className="feature-card-cta d-flex align-items-center gap-2">
											<Button title="Open case" />
											<Button variant="secondary" title="Info" />
										</div>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
			<div className="pb-20 pt-1">
				<div className="heading-wrapper">
					<div className="heading-left">
						<h3>
							<img src="/images/battle-icon.svg" alt="" />
							Latest Battles
							<Button title="View All" variant="secondary" size="sm" />
						</h3>
					</div>
				</div>
				<div className="latest-battles-wrapper ">
					{
						Array(6).fill(null).map((_,) => (
							<div className="latest-battles-block d-flex flex-wrap align-items-center">
								<div className="latest-battles-left">
									<div className="lbl-box d-flex align-items-center">
										<div className="lbl-box-inn">
											<div className="lbl-box-avatar">
												<img src="/images/img1.png" alt="" />
											</div>
											<div className="lbl-box-avatar">
												<img src="/images/img2.png" alt="" />
											</div>
										</div>
										<div className="lbl-icon">
											<DhIcon name='battles' />
										</div>
										<div className="lbl-box-inn">
											<div className="lbl-box-avatar">
												<img src="/images/img3.png" alt="" />
											</div>
											<div className="lbl-box-avatar">
												<img src="/images/img4.png" alt="" />
											</div>
										</div>
									</div>
								</div>
								<div className="latest-battles-middle">
									<div className="lbm-box d-flex flex-wrap align-items-center">
										<div className="lbm-box-icon">
											<img src="/images/img44.png" alt="" />
										</div>
										<div className="lbm-box-icon">
											<img src="/images/img45.png" alt="" />
										</div>
										<div className="lbm-box-icon">
											<img src="/images/img46.png" alt="" />
										</div>
										<div className="lbm-box-icon">
											<img src="/images/img47.png" alt="" />
										</div>
										<div className="lbm-box-icon">
											<img src="/images/img48.png" alt="" />
										</div>
										<div className="lbm-box-icon">
											<img src="/images/img49.png" alt="" />
										</div>
										<div className="lbm-box-icon">
											<img src="/images/img50.png" alt="" />
										</div>
										<div className="lbm-box-icon">
											<img src="/images/img44.png" alt="" />
										</div>
									</div>
								</div>
								<div className="latest-battles-right">
									<div className="lbr-box">
										<h5>$390.<span>00</span></h5>
										<Button title="Open case" />
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
			<div className="reviews-container">
				<div className="heading-wrapper mb-3">
					<div className="heading-left">
						<h3>
							<img src="/images/review.png" alt="" />
							Fresh Deliveries
						</h3>
					</div>
					<div className="heading-right reviews">
						<p>Check out some of the hottest unboxings from our community! To appear on our page, tag us on Twitter when your item arrives.</p>
					</div>
				</div>
				<div className="reviews-list">
					<Swiper
						breakpoints={{
							200: {
								slidesPerView: 1.25,
								spaceBetween: 10
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 10
							},
							992: {
								slidesPerView: 3,
							},
							1300: {
								slidesPerView: 4,
							},
						}}
						slidesPerView={4}
						spaceBetween={20}
						className="mySwiper"
					>
						{
							Array(4).fill(null).map((_, i) => {
								return (
									<SwiperSlide key={i}>
										<div className="reviews-item">
											<div className="reviews-box">
												<div className="reviews-head d-flex">
													<div className="reviews-head-img">
														<img src="/images/img1.png" alt="" />
													</div>
													<div className="reviews-name">
														<h6>Andr Grown</h6>
														<p>@users9384</p>
													</div>
													<div className="reviews-time">
														<p>3 hours ago</p>
													</div>
												</div>
												<div className="reviews-content">
													<h5>Best serivce I ever used</h5>
													<p>It finally arrived. <a href="#!">TY @HypeDrop</a> Lemme know which case I should open to honor this moment</p>
												</div>
												<div className="reviews-img-list d-grid">
													<div className="reviews-img-item">
														<img src="/images/review.jpg" alt="" />
													</div>
													<div className="reviews-img-item">
														<img src="/images/review.jpg" alt="" />
													</div>
													<div className="reviews-img-item">
														<img src="/images/review.jpg" alt="" />
													</div>
												</div>
												<ul className="reviews-icon-list d-flex align-items-cente">
													<li><DhIcon name='starIcon' /></li>
													<li><DhIcon name='starIcon' /></li>
													<li><DhIcon name='starIcon' /></li>
													<li><DhIcon name='starIcon' /></li>
													<li><DhIcon name='starIcon' /></li>
												</ul>
											</div>
										</div>
									</SwiperSlide>
								)
							})
						}
					</Swiper>
				</div>
			</div>
		</>
	);
}
