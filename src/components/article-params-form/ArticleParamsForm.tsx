import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import { clsx } from 'clsx';

import { RadioGroup } from 'src/ui/radio-group';
import { Select } from 'src/ui/select';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import {
	ArticleStateType,
	defaultArticleState,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

interface ArticleParamsFormProps {
	articleState: ArticleStateType;
	confirmArticleState: (newformState: ArticleStateType) => void;
}

export const ArticleParamsForm = ({
	articleState,
	confirmArticleState,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleIsOpen = () => {
		setIsOpen((prev) => !prev);
	};
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		confirmArticleState(formState);
	};

	const resetForm = () => {
		setFormState(defaultArticleState);
		confirmArticleState(formState);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleIsOpen} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form} onSubmit={submitForm} onReset={resetForm}>
					<Text as='h2' size={31} weight={800} uppercase>
						задайте параметры
					</Text>
					<Select
						title='Шрифт'
						options={fontFamilyOptions}
						selected={formState.fontFamilyOption}
						onChange={(option) =>
							setFormState((prev) => ({
								...prev,
								fontFamilyOption: option,
							}))
						}
					/>
					<RadioGroup
						title='Размер шрифта'
						name='Размер шрифта'
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						onChange={(option) =>
							setFormState((prev) => ({
								...prev,
								fontSizeOption: option,
							}))
						}
					/>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={formState.fontColor}
						onChange={(option) =>
							setFormState((prev) => ({
								...prev,
								fontColor: option,
							}))
						}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={formState.backgroundColor}
						onChange={(option) =>
							setFormState((prev) => ({
								...prev,
								backgroundColor: option,
							}))
						}
					/>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={formState.contentWidth}
						onChange={(option) =>
							setFormState((prev) => ({
								...prev,
								contentWidth: option,
							}))
						}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={resetForm}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
