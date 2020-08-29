import React from "react";
import Image1 from "./Academic_grid/images/img1.jpg";
import Image2 from "./Academic_grid/images/img2.jpg";
import Image3 from "./Academic_grid/images/img3.jpg";

const Main = () => {
	return (
		<div>
			<main id="main">
				<section id="section-a">
					<h2 class="content-tittle">Web And Application Devlopment</h2>
					<div class="content-text">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
							vel maxime libero deserunt ipsam voluptatibus iste excepturi nisi,
							odit aliquid amet, asperiores ratione reiciendis harum, maiores ut
							facere. Harum, libero.
						</p>
					</div>
				</section>
				<section id="section-b">
					<ul>
						<li>
							<div class="card">
								<img src={Image1} alt=""></img>
								<div class="card-content">
									<h3 class="card-tittle">Web Devlopment</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quis rem suscipit quasi minus unde iste officiis id,
										reiciendis explicabo amet cumque magni distinctio deserunt
										maiores consectetur. Commodi repellat nostrum totam!
									</p>
								</div>
							</div>
						</li>
						<li>
							<div class="card">
								<img src={Image2} alt=""></img>
								<div class="card-content">
									<h3 class="card-tittle">Mobile Application</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quis rem suscipit quasi minus unde iste officiis id,
										reiciendis explicabo amet cumque magni distinctio deserunt
										maiores consectetur. Commodi repellat nostrum totam!
									</p>
								</div>
							</div>
						</li>
						<li>
							<div class="card">
								<img src={Image3} alt=""></img>
								<div class="card-content">
									<h3 class="card-tittle">Teach Marketing</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quis rem suscipit quasi minus unde iste officiis id,
										reiciendis explicabo amet cumque magni distinctio deserunt
										maiores consectetur. Commodi repellat nostrum totam!
									</p>
								</div>
							</div>
						</li>
					</ul>
				</section>

				<section id="section-c" class="grid">
					<div class="content-wrap">
						<h2 class="content-tittle">We handle all your digital needs</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas et
							hic fuga animi iusto, unde sit quo commodi eaque, molestiae
							perspiciatis fugiat quae, veritatis tempora dolorem voluptatum
							quis. Molestias, sequi!
						</p>
					</div>
				</section>

				<section id="section-d" class="grid">
					<div class="box">
						<h2 class="content-tittle">Contact No.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
							suscipit assumenda natus dicta dolores, ducimus similique dolorem
							voluptatem porro culpa beatae, iste nulla ipsum delectus saepe
							quos doloremque laboriosam vel?
						</p>
						<p className="self1">contact@company.com</p>
					</div>
					<div class="box">
						<h2 class="content-tittle">About Us</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
							minima, laborum nemo laudantium impedit nesciunt, repellat modi ex
							quos dolor quaerat ut. Saepe dolore aspernatur aut sequi
							reiciendis quisquam adipisci.
						</p>
					</div>
				</section>
			</main>
		</div>
	);
};
export default Main;
