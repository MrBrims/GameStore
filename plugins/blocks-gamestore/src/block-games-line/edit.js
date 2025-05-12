import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import "./editor.scss";
import placeholder from "./img/all-games.jpg";

export default function Edit({ attributes, setAttributes }) {
	const { count } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody>
					<TextControl
						label={__("Settings", "blocks-gamestore")}
						value={count}
						onChange={(val) => setAttributes({ count: parseInt(val, 10) || 0 })}
					/>
				</PanelBody>
			</InspectorControls>
			<p {...useBlockProps()}>
				<img src={placeholder} alt={__("Placeholder", "blocks-gamestore")} />
			</p>
		</>
	);
}
