import React from 'react'
import { ReactComponent as DeliveryLogo } from './assets/Delivery.svg'
import { ReactComponent as ContentLogo } from './assets/Content_Ingestion.svg'
import { ReactComponent as HierarchyLogo } from './assets/Hierarchy.svg'
import { ReactComponent as QualityLogo } from './assets/Quality_Check.svg'

function Index({ type, ...rest }) {
    switch (type) {
        case 'delivery':
            return <DeliveryLogo {...rest} />;
        case 'content':
            return <ContentLogo {...rest} />
        case 'hierarchy':
            return <HierarchyLogo {...rest} />;
        case 'quality':
            return <QualityLogo {...rest} />
        default:
            return 'no data';
    }
}

export default Index