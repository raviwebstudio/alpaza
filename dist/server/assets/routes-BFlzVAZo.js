import { a as location, i as instagramUrl, l as tagline, n as displayPhoneNumber, r as instagramHandle, t as brandName, u as whatsappUrl } from "./routes-C5Lf83NT.js";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Camera, Instagram, Leaf, MapPin, MessageCircle, Minus, Plus, Ruler, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
//#region src/assets/hero.jpg
var hero_default = "/assets/hero-B37IkO5E.jpg";
//#endregion
//#region src/assets/collection-1.jpg
var collection_1_default = "/assets/collection-1-DczPmavd.jpg";
//#endregion
//#region src/assets/collection-2.jpg
var collection_2_default = "/assets/collection-2-hPZBubSf.jpg";
//#endregion
//#region src/assets/collection-3.jpg
var collection_3_default = "/assets/collection-3-CISiYS0h.jpg";
//#endregion
//#region src/assets/tee-1.jpg
var tee_1_default = "/assets/tee-1-u9Ui09Lo.jpg";
//#endregion
//#region src/assets/tee-2.jpg
var tee_2_default = "/assets/tee-2-CQFwq7aE.jpg";
//#endregion
//#region src/assets/tee-3.jpg
var tee_3_default = "/assets/tee-3-C5bwZB_a.jpg";
//#endregion
//#region src/assets/tee-4.jpg
var tee_4_default = "/assets/tee-4-CcxjlR-b.jpg";
//#endregion
//#region src/assets/fabric.jpg
var fabric_default = "/assets/fabric-CwxsNMFw.jpg";
//#endregion
//#region src/hooks/use-reveal.ts
var defaultRevealOptions = {
	threshold: .15,
	rootMargin: "0px 0px -60px 0px"
};
function useReveal(options = defaultRevealOptions) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const node = ref.current;
		if (!node || typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setVisible(true);
					obs.unobserve(e.target);
				}
			});
		}, options);
		obs.observe(node);
		return () => obs.disconnect();
	}, [options]);
	return {
		ref,
		className: visible ? "reveal reveal-in" : "reveal"
	};
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function LandingPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(AnnouncementBar, {}),
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(Marquee, {}),
				/* @__PURE__ */ jsx(Collection, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(WhyUs, {}),
				/* @__PURE__ */ jsx(Fabric, {}),
				/* @__PURE__ */ jsx(Testimonials, {}),
				/* @__PURE__ */ jsx(Faq, {}),
				/* @__PURE__ */ jsx(Gallery, {}),
				/* @__PURE__ */ jsx(Contact, {}),
				/* @__PURE__ */ jsx(CustomPrint, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
function AnnouncementBar() {
	return /* @__PURE__ */ jsx("div", {
		className: "bg-ink text-primary-foreground",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-[11px] font-medium tracking-[0.18em] sm:text-xs",
			children: [/* @__PURE__ */ jsx(Sparkles, {
				className: "h-3.5 w-3.5 shrink-0",
				"aria-hidden": true
			}), /* @__PURE__ */ jsx("span", {
				className: "uppercase",
				children: "Online cart launching soon · Order now via Instagram or WhatsApp"
			})]
		})
	});
}
function Nav() {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsx("header", {
		className: `sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-border/60 bg-background/85 backdrop-blur-md" : "border-transparent bg-background"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-4 py-4 sm:px-6 lg:px-10",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "#top",
					className: "font-display text-xl tracking-[0.35em] sm:text-2xl",
					children: brandName
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden justify-center gap-9 text-sm text-muted-foreground md:flex",
					children: [
						["Collection", "#collection"],
						["About", "#about"],
						["Fabric", "#fabric"],
						["FAQ", "#faq"],
						["Contact", "#contact"]
					].map(([label, href]) => /* @__PURE__ */ jsx("a", {
						href,
						className: "relative transition-colors hover:text-foreground after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full",
						children: label
					}, href))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("a", {
						href: instagramUrl,
						"aria-label": `${brandName} on Instagram`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background",
						children: /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" })
					}), /* @__PURE__ */ jsxs("a", {
						href: whatsappUrl,
						"aria-label": "Order via WhatsApp",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hidden h-9 items-center gap-2 rounded-full bg-foreground px-4 text-xs font-medium tracking-widest text-background transition-transform hover:scale-[1.02] sm:inline-flex",
						children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }), "ORDER"]
					})]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ jsx("section", {
		id: "top",
		className: "relative overflow-hidden bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-10 lg:pb-32 lg:pt-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "eyebrow mb-6 inline-flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("span", { className: "inline-block h-px w-8 bg-foreground/50" }), "Coming Soon · 2026"]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "font-display text-[3.25rem] leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-[6.5rem]",
						children: [
							"Made for",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "italic text-muted-foreground",
								children: "the Move."
							})
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: [brandName, " is a minimal luxury label engineered around motion — refined silhouettes, considered fabrics, and pieces built to move with you, not against you."]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ jsxs("a", {
							href: instagramUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-background uppercase transition-transform hover:scale-[1.02]",
							children: [
								/* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" }),
								"Order on Instagram",
								/* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
							]
						}), /* @__PURE__ */ jsxs("a", {
							href: whatsappUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group inline-flex items-center gap-3 rounded-full border border-foreground px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-foreground uppercase transition-colors hover:bg-foreground hover:text-background",
							children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }), "WhatsApp Order"]
						})]
					}),
					/* @__PURE__ */ jsx("dl", {
						className: "mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8 text-left",
						children: [
							["24h", "Order response"],
							["100%", "Premium fabrics"],
							["Global", "Shipping soon"]
						].map(([k, v]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
							className: "font-display text-2xl text-foreground sm:text-3xl",
							children: k
						}), /* @__PURE__ */ jsx("dd", {
							className: "eyebrow mt-1",
							children: v
						})] }, v))
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "relative mx-auto w-full max-w-[22rem] px-1 sm:max-w-[25rem] sm:px-2 lg:max-w-[26.5rem] lg:px-3 lg:pr-4 xl:max-w-[28rem]",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-stone-warm",
					children: [/* @__PURE__ */ jsx("img", {
						src: hero_default,
						alt: `${brandName} campaign — model in flowing motion`,
						width: 1600,
						height: 1800,
						fetchPriority: "high",
						decoding: "async",
						className: "absolute inset-0 h-full w-full object-cover",
						style: { animation: "slow-zoom 1.8s ease-out both" }
					}), /* @__PURE__ */ jsxs("div", {
						className: "absolute inset-x-6 bottom-6 z-10 flex items-end justify-between text-primary-foreground",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "eyebrow !text-primary-foreground/70",
							children: "Chapter 01"
						}), /* @__PURE__ */ jsx("p", {
							className: "font-display text-xl sm:text-[1.3rem]",
							children: "The First Drop"
						})] }), /* @__PURE__ */ jsx("span", {
							className: "rounded-full border border-primary-foreground/40 px-3 py-1 text-[9px] uppercase tracking-[0.25em]",
							children: "Preview"
						})]
					})]
				})
			})]
		})
	});
}
function Marquee() {
	const words = [
		tagline,
		"Coming Soon",
		"Minimal Luxury",
		"Est. Alpaza"
	];
	return /* @__PURE__ */ jsx("div", {
		className: "border-y border-border bg-background py-5 overflow-hidden",
		children: /* @__PURE__ */ jsx("div", {
			className: "marquee-track flex w-max items-center gap-14 whitespace-nowrap",
			children: [
				...words,
				...words,
				...words
			].map((w, i) => /* @__PURE__ */ jsxs("span", {
				className: "flex items-center gap-14",
				children: [/* @__PURE__ */ jsx("span", {
					className: "font-display text-2xl italic text-foreground/80 sm:text-3xl",
					children: w
				}), /* @__PURE__ */ jsx("span", {
					className: "text-foreground/40",
					children: "✦"
				})]
			}, i))
		})
	});
}
function Collection() {
	const items = [
		{
			img: tee_1_default,
			name: "Essential Oversized Tee",
			tag: "Essentials",
			note: "Signature weight cotton"
		},
		{
			img: tee_2_default,
			name: "Signature Heavyweight Tee",
			tag: "Heavyweight",
			note: "240 GSM combed cotton"
		},
		{
			img: tee_3_default,
			name: "Classic Oversized Tee",
			tag: "Classic",
			note: "Premium combed cotton"
		},
		{
			img: tee_4_default,
			name: "Everyday Oversized Tee",
			tag: "Everyday",
			note: "Soft-hand jersey knit"
		}
	];
	const reveal = useReveal();
	return /* @__PURE__ */ jsxs("section", {
		id: "collection",
		className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-12 flex flex-wrap items-end justify-between gap-6",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "eyebrow mb-3",
				children: "Featured Collection · Preview"
			}), /* @__PURE__ */ jsxs("h2", {
				className: "font-display text-4xl leading-tight sm:text-5xl lg:text-6xl",
				children: [
					"The first pieces,",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("span", {
						className: "italic text-muted-foreground",
						children: "quietly considered."
					})
				]
			})] }), /* @__PURE__ */ jsx("p", {
				className: "max-w-sm text-sm text-muted-foreground",
				children: "A tightly edited debut. Fewer pieces, engineered better — each one designed to move, layer and last."
			})]
		}), /* @__PURE__ */ jsx("div", {
			ref: reveal.ref,
			className: `${reveal.className} grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4`,
			children: items.map((it, i) => /* @__PURE__ */ jsxs("article", {
				className: "group relative overflow-hidden rounded-sm bg-secondary transition-shadow duration-500 hover:shadow-2xl",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative aspect-[4/5] overflow-hidden",
					children: [/* @__PURE__ */ jsx("img", {
						src: it.img,
						alt: it.name,
						width: 900,
						height: 1100,
						loading: "lazy",
						decoding: "async",
						className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
					}), /* @__PURE__ */ jsx("span", {
						className: "absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground backdrop-blur",
						children: "Coming Soon"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-5",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "eyebrow",
							children: [
								it.tag,
								" · N°",
								String(i + 1).padStart(2, "0")
							]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-1 font-display text-xl",
							children: it.name
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground",
							children: it.note
						})
					]
				})]
			}, it.name))
		})]
	});
}
function About() {
	const reveal = useReveal();
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "bg-secondary",
		children: /* @__PURE__ */ jsxs("div", {
			ref: reveal.ref,
			className: `${reveal.className} mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-10 lg:py-32`,
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
				className: "eyebrow mb-4",
				children: ["About ", brandName]
			}), /* @__PURE__ */ jsxs("h2", {
				className: "font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl",
				children: [
					"A quiet study in ",
					/* @__PURE__ */ jsx("span", {
						className: "italic",
						children: "motion"
					}),
					" and material."
				]
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg",
				children: [
					/* @__PURE__ */ jsxs("p", { children: [brandName, " began with a simple obsession: pieces that felt as considered standing still as they do in motion. We design a small, deliberate wardrobe — refined silhouettes, honest fabrics, and finishes that reward a closer look."] }),
					/* @__PURE__ */ jsx("p", { children: "Every piece is prototyped on real bodies, worn through real days, and revised until nothing pulls, bunches, or restricts. The result is a uniform for the way you actually live." }),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-2 gap-6 pt-4",
						children: [/* @__PURE__ */ jsx(Stat, {
							k: "2026",
							v: "Est. Year"
						}), /* @__PURE__ */ jsx(Stat, {
							k: location.replace(/ Studio$/, ""),
							v: "Studio"
						})]
					})
				]
			})]
		})
	});
}
function Stat({ k, v }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "border-t border-border pt-4",
		children: [/* @__PURE__ */ jsx("p", {
			className: "font-display text-3xl text-foreground",
			children: k
		}), /* @__PURE__ */ jsx("p", {
			className: "eyebrow mt-1",
			children: v
		})]
	});
}
function WhyUs() {
	const items = [
		{
			icon: Leaf,
			t: "Responsibly Sourced",
			d: "Small-batch mills, traceable fibres, low-impact dyes."
		},
		{
			icon: Ruler,
			t: "Engineered Fit",
			d: "Patterns refined across dozens of wear tests."
		},
		{
			icon: ShieldCheck,
			t: "Built to Last",
			d: "Reinforced seams and finishes designed for years."
		},
		{
			icon: Truck,
			t: "Direct to You",
			d: "No middlemen. Fair pricing, no seasonal markdowns."
		}
	];
	const reveal = useReveal();
	return /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-14 max-w-2xl",
			children: [/* @__PURE__ */ jsxs("p", {
				className: "eyebrow mb-3",
				children: ["Why ", brandName]
			}), /* @__PURE__ */ jsxs("h2", {
				className: "font-display text-4xl leading-tight sm:text-5xl lg:text-6xl",
				children: [
					"Four principles.",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("span", {
						className: "italic text-muted-foreground",
						children: "Zero compromise."
					})
				]
			})]
		}), /* @__PURE__ */ jsx("div", {
			ref: reveal.ref,
			className: `${reveal.className} grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4`,
			children: items.map(({ icon: Icon, t, d }) => /* @__PURE__ */ jsxs("div", {
				className: "group bg-background p-8 transition-colors duration-500 hover:bg-foreground hover:text-background",
				children: [
					/* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 transition-transform duration-500 group-hover:-translate-y-1" }),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-8 font-display text-2xl",
						children: t
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-sm text-muted-foreground transition-colors group-hover:text-background/70",
						children: d
					})
				]
			}, t))
		})]
	});
}
function Fabric() {
	const reveal = useReveal();
	return /* @__PURE__ */ jsx("section", {
		id: "fabric",
		className: "bg-ink text-primary-foreground",
		children: /* @__PURE__ */ jsxs("div", {
			ref: reveal.ref,
			className: `${reveal.className} mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32`,
			children: [/* @__PURE__ */ jsx("div", {
				className: "order-2 lg:order-1",
				children: /* @__PURE__ */ jsx("div", {
					className: "relative h-full min-h-[420px] overflow-hidden rounded-sm lg:min-h-[560px]",
					children: /* @__PURE__ */ jsx("img", {
						src: fabric_default,
						alt: "Close-up of premium woven fabric",
						width: 1400,
						height: 1e3,
						loading: "lazy",
						decoding: "async",
						className: "absolute inset-0 h-full w-full object-cover"
					})
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "order-1 flex flex-col justify-center lg:order-2",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow mb-4 !text-primary-foreground/60",
						children: "Quality & Fabric"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "font-display text-4xl leading-tight sm:text-5xl lg:text-6xl",
						children: [
							"Fabric first.",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "italic opacity-70",
								children: "Everything follows."
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/70 sm:text-lg",
						children: "We work with a shortlist of European and Japanese mills to source long-staple cottons, tactile wools, and technical weaves with real recovery. Each fabric is chosen for how it feels on the second wear — and the two-hundredth."
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-10 grid gap-4",
						children: [
							"Long-staple Supima & Egyptian cottons",
							"Four-way stretch technical weaves",
							"OEKO-TEX certified dyes & finishes",
							"Reinforced stitching at every stress point"
						].map((line) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-4 border-t border-primary-foreground/15 pt-4 text-sm",
							children: [/* @__PURE__ */ jsx("span", { className: "mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-foreground" }), /* @__PURE__ */ jsx("span", {
								className: "text-primary-foreground/85",
								children: line
							})]
						}, line))
					})
				]
			})]
		})
	});
}
function Testimonials() {
	const reveal = useReveal();
	return /* @__PURE__ */ jsx("section", {
		className: "bg-secondary py-24 lg:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-14 max-w-2xl",
				children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow mb-3",
					children: "Testimonials"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "font-display text-4xl leading-tight sm:text-5xl lg:text-6xl",
					children: [
						"What our customers",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "italic text-muted-foreground",
							children: "say."
						})
					]
				})]
			}), /* @__PURE__ */ jsx("div", {
				ref: reveal.ref,
				className: `${reveal.className} grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4`,
				children: [
					{
						quote: "Premium quality and perfect oversized fit. Exactly what I wanted.",
						name: "Ankur"
					},
					{
						quote: "The fabric feels amazing and the print quality is excellent.",
						name: "Nishant"
					},
					{
						quote: "Minimal design with premium packaging. Worth every rupee.",
						name: "Shivam"
					},
					{
						quote: "Finally an Indian oversized tee brand that feels truly premium.",
						name: "Priyanshu"
					}
				].map((t) => /* @__PURE__ */ jsxs("figure", {
					className: "flex h-full flex-col justify-between rounded-sm border border-border bg-background p-7 transition-shadow duration-500 hover:shadow-xl",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "flex items-center gap-1",
						"aria-label": "5 out of 5 stars",
						style: { color: "#F5C542" },
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, {
							className: "h-4 w-4 fill-current",
							strokeWidth: 0
						}, i))
					}), /* @__PURE__ */ jsxs("blockquote", {
						className: "mt-5 font-display text-lg leading-snug text-foreground",
						children: [
							"“",
							t.quote,
							"”"
						]
					})] }), /* @__PURE__ */ jsxs("figcaption", {
						className: "mt-8 flex items-center gap-3 border-t border-border pt-5",
						children: [/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground font-display text-sm text-background",
							children: t.name.charAt(0)
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
							className: "text-sm font-medium text-foreground",
							children: ["— ", t.name]
						}), /* @__PURE__ */ jsx("p", {
							className: "eyebrow mt-0.5",
							children: "Verified customer"
						})] })]
					})]
				}, t.name))
			})]
		})
	});
}
function Faq() {
	const items = [
		{
			q: "When does the online store launch?",
			a: "Our online cart is launching soon. Until then, every order is placed personally through Instagram DM or WhatsApp — you get a real human response within 24 hours."
		},
		{
			q: "How do I order right now?",
			a: `Message us on Instagram (${instagramHandle}) or WhatsApp (${displayPhoneNumber}) with the piece and your size. We'll confirm availability, share payment options, and arrange shipping.`
		},
		{
			q: "Do you ship internationally?",
			a: "Yes. We currently arrange international shipping on request. Full worldwide checkout will be available at launch."
		},
		{
			q: "What's your return policy?",
			a: "Unworn pieces can be returned within 03 days of delivery. We cover return shipping on any size exchange."
		},
		{
			q: `How should I care for ${brandName} pieces?`,
			a: "Cold wash inside-out, lay flat to dry, and skip the tumble dryer. Full care instructions ship with every order."
		}
	];
	const [open, setOpen] = useState(0);
	return /* @__PURE__ */ jsxs("section", {
		id: "faq",
		className: "mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-12 text-center",
			children: [/* @__PURE__ */ jsx("p", {
				className: "eyebrow mb-3",
				children: "FAQ"
			}), /* @__PURE__ */ jsxs("h2", {
				className: "font-display text-4xl leading-tight sm:text-5xl lg:text-6xl",
				children: [
					"Everything,",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "italic text-muted-foreground",
						children: "answered."
					})
				]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "divide-y divide-border border-y border-border",
			children: items.map((it, i) => {
				const isOpen = open === i;
				const answerId = `faq-answer-${i}`;
				return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: () => setOpen(isOpen ? null : i),
					className: "flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-foreground",
					"aria-expanded": isOpen,
					"aria-controls": answerId,
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-display text-xl sm:text-2xl",
						children: it.q
					}), /* @__PURE__ */ jsx("span", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border",
						"aria-hidden": "true",
						children: isOpen ? /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
					})]
				}), /* @__PURE__ */ jsx("div", {
					id: answerId,
					className: "grid overflow-hidden transition-all duration-500 ease-out",
					style: { gridTemplateRows: isOpen ? "1fr" : "0fr" },
					children: /* @__PURE__ */ jsx("div", {
						className: "min-h-0",
						children: /* @__PURE__ */ jsx("p", {
							className: "pb-6 pr-14 text-sm leading-relaxed text-muted-foreground sm:text-base",
							children: it.a
						})
					})
				})] }, it.q);
			})
		})]
	});
}
function Gallery() {
	const tiles = [
		collection_1_default,
		hero_default,
		collection_3_default,
		collection_2_default,
		fabric_default,
		collection_1_default
	];
	const reveal = useReveal();
	return /* @__PURE__ */ jsx("section", {
		className: "bg-secondary py-24 lg:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-12 flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
					className: "eyebrow mb-3",
					children: [instagramHandle, " · Instagram"]
				}), /* @__PURE__ */ jsxs("h2", {
					className: "font-display text-4xl leading-tight sm:text-5xl lg:text-6xl",
					children: ["Follow the ", /* @__PURE__ */ jsx("span", {
						className: "italic",
						children: "movement."
					})]
				})] }), /* @__PURE__ */ jsxs("a", {
					href: instagramUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "group inline-flex items-center gap-2 text-sm font-medium tracking-[0.2em] uppercase text-foreground",
					children: ["Visit Instagram", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				ref: reveal.ref,
				className: `${reveal.className} grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6`,
				children: tiles.map((src, i) => /* @__PURE__ */ jsxs("a", {
					href: instagramUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "group relative block aspect-square overflow-hidden rounded-sm bg-background",
					"aria-label": "Open Instagram",
					children: [/* @__PURE__ */ jsx("img", {
						src,
						alt: "",
						loading: "lazy",
						decoding: "async",
						className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
					}), /* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 grid place-items-center bg-foreground/0 opacity-0 transition-all duration-300 group-hover:bg-foreground/40 group-hover:opacity-100",
						children: /* @__PURE__ */ jsx(Camera, { className: "h-5 w-5 text-background" })
					})]
				}, i))
			})]
		})
	});
}
function Contact() {
	const reveal = useReveal();
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			ref: reveal.ref,
			className: `${reveal.className} grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20`,
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow mb-4",
					children: "Contact"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl",
					children: [
						"Let's talk.",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "italic text-muted-foreground",
							children: "We reply personally."
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-md text-base leading-relaxed text-muted-foreground",
					children: "For orders, sizing help, press, or wholesale — reach us on the channels below. A real member of the studio responds within 24 hours."
				})
			] }), /* @__PURE__ */ jsxs("div", {
				className: "grid gap-3 self-center",
				children: [
					/* @__PURE__ */ jsx(ContactRow, {
						href: instagramUrl,
						icon: Instagram,
						label: "Instagram · Order & DM",
						value: instagramHandle
					}),
					/* @__PURE__ */ jsx(ContactRow, {
						href: whatsappUrl,
						icon: MessageCircle,
						label: "WhatsApp · Fastest reply",
						value: `Message ${displayPhoneNumber}`
					}),
					/* @__PURE__ */ jsx(ContactRow, {
						href: "#",
						icon: MapPin,
						label: "Studio",
						value: location
					})
				]
			})]
		})
	});
}
function ContactRow({ href, icon: Icon, label, value }) {
	return /* @__PURE__ */ jsxs("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
		className: "group flex items-center justify-between gap-6 rounded-sm border border-border bg-background px-6 py-5 transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex min-w-0 items-center gap-4",
			children: [/* @__PURE__ */ jsx("span", {
				className: "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border transition-colors group-hover:border-background/40",
				children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
			}), /* @__PURE__ */ jsxs("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow transition-colors group-hover:!text-background/60",
					children: label
				}), /* @__PURE__ */ jsx("p", {
					className: "truncate font-display text-lg",
					children: value
				})]
			})]
		}), /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
	});
}
function CustomPrint() {
	const reveal = useReveal();
	return /* @__PURE__ */ jsx("section", {
		className: "bg-ink text-primary-foreground",
		children: /* @__PURE__ */ jsxs("div", {
			ref: reveal.ref,
			className: `${reveal.className} mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-10 lg:py-32`,
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsxs("span", {
					className: "eyebrow mb-6 inline-flex items-center gap-2 !text-primary-foreground/60",
					children: [/* @__PURE__ */ jsx("span", { className: "inline-block h-px w-8 bg-primary-foreground/40" }), "Coming Soon"]
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl",
					children: ["Print Your Own ", /* @__PURE__ */ jsx("span", {
						className: "italic opacity-70",
						children: "Design."
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 font-display text-2xl italic text-primary-foreground/70 sm:text-3xl",
					children: "Coming Soon."
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-8 max-w-lg text-base leading-relaxed text-primary-foreground/70 sm:text-lg",
					children: [
						"Want your own design on a premium oversized tee? Soon you'll be able to upload your artwork or logo and we'll print it on ",
						brandName,
						"premium-quality t-shirts with the same fabric, fit, and finish."
					]
				}),
				/* @__PURE__ */ jsxs("button", {
					type: "button",
					disabled: true,
					"aria-disabled": "true",
					className: "mt-10 inline-flex cursor-not-allowed items-center gap-3 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/60",
					children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }), "Notify Me"]
				})
			] }), /* @__PURE__ */ jsx("ul", {
				className: "grid content-center gap-4",
				children: [
					"Your Design",
					"Premium Oversized T-Shirts",
					"High Quality Printing",
					"Bulk & Personal Orders",
					"Launching Soon"
				].map((f) => /* @__PURE__ */ jsxs("li", {
					className: "flex items-center justify-between gap-4 border-t border-primary-foreground/15 pt-4 text-sm",
					children: [/* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 shrink-0 rounded-full bg-primary-foreground" }), /* @__PURE__ */ jsx("span", {
							className: "text-primary-foreground/85",
							children: f
						})]
					}), /* @__PURE__ */ jsx("span", {
						className: "text-[10px] uppercase tracking-[0.25em] text-primary-foreground/40",
						children: "Soon"
					})]
				}, f))
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "font-display text-2xl tracking-[0.35em]",
							children: brandName
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-4 max-w-xs text-sm text-muted-foreground",
							children: [tagline, ". Minimal luxury essentials designed to move with you — launching online soon."]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex gap-2",
							children: [/* @__PURE__ */ jsx("a", {
								href: instagramUrl,
								"aria-label": "Instagram",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background",
								children: /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" })
							}), /* @__PURE__ */ jsx("a", {
								href: whatsappUrl,
								"aria-label": "WhatsApp",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background",
								children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" })
							})]
						})
					] }),
					/* @__PURE__ */ jsx(FooterCol, {
						title: "Explore",
						links: [
							["Collection", "#collection"],
							["About", "#about"],
							["Fabric", "#fabric"]
						]
					}),
					/* @__PURE__ */ jsx(FooterCol, {
						title: "Support",
						links: [
							["FAQ", "#faq"],
							["Contact", "#contact"],
							["Shipping", "#faq"]
						]
					}),
					/* @__PURE__ */ jsx(FooterCol, {
						title: "Order",
						links: [["Instagram", instagramUrl], ["WhatsApp", whatsappUrl]]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					brandName,
					". All rights reserved."
				] }), /* @__PURE__ */ jsxs("p", {
					className: "tracking-[0.25em] uppercase",
					children: [
						"Designed by",
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "https://www.crowcent.com",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-foreground transition-colors hover:opacity-70",
							children: "CROWCENT"
						})
					]
				})]
			})]
		})
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
		className: "eyebrow mb-4",
		children: title
	}), /* @__PURE__ */ jsx("ul", {
		className: "space-y-2 text-sm",
		children: links.map(([l, h]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
			href: h,
			target: h.startsWith("http") ? "_blank" : void 0,
			rel: h.startsWith("http") ? "noopener noreferrer" : void 0,
			className: "text-foreground/80 transition-colors hover:text-foreground",
			children: l
		}) }, l))
	})] });
}
//#endregion
export { LandingPage as component };
