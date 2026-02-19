import styles from 'src/styles/index.module.scss';
import { useState, CSSProperties } from 'react';
import { defaultArticleState } from 'src/constants/articleProps';
import { ArticleParamsForm } from 'src/components/article-params-form';
import { Article } from 'src/components/article';

export const App = () => {
	const [articleState, setArticleState] = useState(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				articleState={articleState}
				confirmArticleState={setArticleState}
			/>
			<Article />
		</main>
	);
};