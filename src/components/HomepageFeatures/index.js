import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  // 左侧板块
  {
    title: 'All about Kerrigen Timo',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        TImoliew的个人网站
      </>
    ),
  },
  // 中间板块
  {
    title: 'Study note _Kerrigen Timo',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        一个脱离了低级趣味的终身学习者
      </>
    ),
  },
  // 右侧板块 (因为你没填，为了排版平衡，我帮你加了个占位，以后想改随时改)
  {
    title: 'Coming Soon',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        更多精彩内容正在建设中... 敬请期待！
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
