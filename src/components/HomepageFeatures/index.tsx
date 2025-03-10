import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '',
    Svg: require('@site/static/img/tree.svg').default,
    description: (
      <>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/main">
            点滴积累
          </Link>
        </div>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/sea-sun.svg').default,
    description: (
      <>
        <Link
          className="button button--primary button--lg"
          to="/docs/Podcast/episodes/main">
          播客
        </Link>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/sizi.svg').default,
    description: (
      <>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/main">
            博客
          </Link>
        </div>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
