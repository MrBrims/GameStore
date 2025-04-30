import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { memberLink, cartLink } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title="Block Settings">
					<TextControl
						label="Member Link"
						value={memberLink}
						onChange={(value) => setAttributes({ memberLink: value })}
					/>
					<TextControl
						label="Cart Link"
						value={cartLink}
						onChange={(value) => setAttributes({ cartLink: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="inner-header">
					<InnerBlocks />
					<div className="right-section">
						<div className="header-search">
							<svg
								width="22"
								height="22"
								viewBox="0 0 22 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M21.29 20.66L16.61 15.95C19.97 12.2 19.7 6.44002 15.95 3.05002C12.2 -0.339979 6.44002 -0.0399786 3.05002 3.71002C-0.339979 7.46002 -0.0399786 13.22 3.71002 16.61C7.19002 19.76 12.5 19.76 15.98 16.61L20.69 21.32L21.29 20.66ZM9.83002 18.05C5.30002 18.05 1.61002 14.36 1.61002 9.83002C1.61002 5.27002 5.30002 1.61002 9.83002 1.61002C14.36 1.61002 18.05 5.30002 18.05 9.83002C18.05 14.36 14.36 18.05 9.83002 18.05Z"
									fill="var(--action-main-svg, rgb(255, 255, 255))"
									fill-opacity="0.64"
								/>
								<path
									d="M9.83008 2.83984V3.73984C13.1901 3.73984 15.9201 6.46984 15.9201 9.82984H16.8201C16.8201 5.95984 13.7001 2.83984 9.83008 2.83984Z"
									fill="var(--action-main-svg, rgb(255, 255, 255))"
									fill-opacity="0.64"
								/>
							</svg>
						</div>
						<button
							className="header-mode-switcher"
							aria-label={__("Toggle Dark Mode", "blocks-gamestore")}
						>
							<svg
								width="20"
								height="26"
								viewBox="0 0 20 26"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13 19V7"
									stroke="var(--action-main-svg, rgb(255, 255, 255))"
									stroke-opacity="0.64"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1 13H4"
									stroke="var(--action-main-svg, rgb(255, 255, 255))"
									stroke-opacity="0.64"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M4.50977 4.51025L6.63977 6.64025"
									stroke="var(--action-main-svg, rgb(255, 255, 255))"
									stroke-opacity="0.64"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M13 1V4"
									stroke="var(--action-main-svg, rgb(255, 255, 255))"
									stroke-opacity="0.64"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M13 25V22"
									stroke="var(--action-main-svg, rgb(255, 255, 255))"
									stroke-opacity="0.64"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M4.50977 21.4899L6.63977 19.3599"
									stroke="var(--action-main-svg, rgb(255, 255, 255))"
									stroke-opacity="0.64"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M13 19C16.3137 19 19 16.3137 19 13C19 9.68629 16.3137 7 13 7C9.68629 7 7 9.68629 7 13C7 16.3137 9.68629 19 13 19Z"
									stroke="var(--action-main-svg, rgb(255, 255, 255))"
									stroke-opacity="0.64"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
						{cartLink && (
							<div className="header-cart-link">
								<a href={cartLink}>
									<svg
										width="26"
										height="20"
										viewBox="0 0 26 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2.71436 6.57178L4.42864 18.5718H21.5715L23.2858 6.57178"
											stroke="var(--action-main-svg, rgb(255, 255, 255))"
											stroke-opacity="0.64"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M7.85693 8.28585L9.57122 1.42871"
											stroke="var(--action-main-svg, rgb(255, 255, 255))"
											stroke-opacity="0.64"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M18.143 8.28585L16.4287 1.42871"
											stroke="var(--action-main-svg, rgb(255, 255, 255))"
											stroke-opacity="0.64"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M1 6.57178H25"
											stroke="var(--action-main-svg, rgb(255, 255, 255))"
											stroke-opacity="0.64"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</a>
							</div>
						)}
						{memberLink && (
							<div className="header-member-link">
								<a href={memberLink}>{__("Member Area", "blocks-gamestore")}</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
