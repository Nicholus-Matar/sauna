import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.b4bb6afd.js';

/* src/routes/index.svelte generated by Svelte v3.31.2 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let section;
	let div3;
	let div1;
	let h1;
	let t1;
	let br;
	let t2;
	let t3;
	let p;
	let t4;
	let t5;
	let div0;
	let button0;
	let t6;
	let t7;
	let button1;
	let t8;
	let t9;
	let div2;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			div3 = element("div");
			div1 = element("div");
			h1 = element("h1");
			t1 = text("Before they sold out\n        ");
			br = element("br");
			t2 = text("readymade gluten");
			t3 = space();
			p = element("p");
			t4 = text("Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.");
			t5 = space();
			div0 = element("div");
			button0 = element("button");
			t6 = text("Button");
			t7 = space();
			button1 = element("button");
			t8 = text("Button");
			t9 = space();
			div2 = element("div");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-oh6yg0\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div3 = claim_element(section_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Before they sold out\n        ");
			br = claim_element(h1_nodes, "BR", { class: true });
			t2 = claim_text(h1_nodes, "readymade gluten");
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t4 = claim_text(p_nodes, "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.");
			p_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			button0 = claim_element(div0_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t6 = claim_text(button0_nodes, "Button");
			button0_nodes.forEach(detach_dev);
			t7 = claim_space(div0_nodes);
			button1 = claim_element(div0_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t8 = claim_text(button1_nodes, "Button");
			button1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t9 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			img = claim_element(div2_nodes, "IMG", { class: true, alt: true, src: true });
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(br, "class", "hidden lg:inline-block");
			add_location(br, file, 10, 8, 447);
			attr_dev(h1, "class", "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900");
			add_location(h1, file, 9, 6, 343);
			attr_dev(p, "class", "mb-8 leading-relaxed");
			add_location(p, file, 12, 6, 517);
			attr_dev(button0, "class", "inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg");
			add_location(button0, file, 14, 8, 824);
			attr_dev(button1, "class", "ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg");
			add_location(button1, file, 15, 8, 975);
			attr_dev(div0, "class", "flex justify-center");
			add_location(div0, file, 13, 6, 782);
			attr_dev(div1, "class", "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center");
			add_location(div1, file, 8, 4, 202);
			attr_dev(img, "class", "object-cover object-center rounded");
			attr_dev(img, "alt", "hero");
			if (img.src !== (img_src_value = "https://dummyimage.com/720x600")) attr_dev(img, "src", img_src_value);
			add_location(img, file, 19, 6, 1207);
			attr_dev(div2, "class", "lg:max-w-lg lg:w-full md:w-1/2 w-5/6");
			add_location(div2, file, 18, 4, 1150);
			attr_dev(div3, "class", "container mx-auto flex px-5 py-24 md:flex-row flex-col items-center");
			add_location(div3, file, 7, 2, 116);
			attr_dev(section, "class", "text-gray-600 body-font");
			add_location(section, file, 6, 0, 72);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, div3);
			append_dev(div3, div1);
			append_dev(div1, h1);
			append_dev(h1, t1);
			append_dev(h1, br);
			append_dev(h1, t2);
			append_dev(div1, t3);
			append_dev(div1, p);
			append_dev(p, t4);
			append_dev(div1, t5);
			append_dev(div1, div0);
			append_dev(div0, button0);
			append_dev(button0, t6);
			append_dev(div0, t7);
			append_dev(div0, button1);
			append_dev(button1, t8);
			append_dev(div3, t9);
			append_dev(div3, div2);
			append_dev(div2, img);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzdlMjY4MzYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
