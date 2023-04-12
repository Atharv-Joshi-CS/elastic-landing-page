export interface CTAButtonTD {
    button_type : string,
    cta_link : {
        href : string, 
        title : string
    }
}

export interface PrimaryButtonTD {
    displayText : string,
    href : string,
    hasArrow : boolean,
    hasDisplayText : boolean
    imgSrc : string
}

export interface HeaderTD{
    cta_buttons : Array<CTAButtonTD>,
    logo : {url : string},
    title : string
}

export interface BannerTD{
    cta : CTAButtonTD,
    title : string,
    subtitle : string
}

export interface NewsLetterTD {
    title : string,
    terms_and_conditions : string,
    cta : CTAButtonTD
}

export interface SocialsTD {
    title : string,
    cta : Array<CTAButtonTD>
}

export interface SectionNavigationLinksTD{
    title : string,
    cta : Array<CTAButtonTD>
}

export interface FooterTD {
    copyright : string
    cta_buttons : Array<CTAButtonTD>,
    logo : {
        url : string,
    },
    trademark : string
    newsletter : NewsLetterTD,
    socials : SocialsTD,
    section_navigation_links : Array<SectionNavigationLinksTD>
}

export interface CustomerCardTD{
    link : {
        href : string,
        title : string
    },
    logo : {
        url : string
    }
}

export interface OurCustomersTD{
    cta : {href : string, title : string},
    title : string,
    subtitle : string,
    company_card : Array<CustomerCardTD>
}

export interface StarterProductCardTD{
    description : string,
    product_name : string,
    logo : {
        url : string
    }
}

export interface StarterProductsTD{
    title : string,
    subtitle : string,
    cta : {
        href : string,
        title : string
    },
    product_card : Array<StarterProductCardTD>
}

export interface ElasticFeatureCardTD {
    logo : {
        url : string
    },
    title : string,
    subtitle : string,
    description : string,
    cta : {
        href : string,
        title : string
    },
    video_on_left : boolean,
    video : {
        url : string
    },
    testimonial : {
        employee_position : string,
        value_proposition : string,
        logo : {
            url : string
        }
    }
}

export interface FeaturesOfElasticProductTD{
    title : string,
    subtitle : string,
    feature_description : Array<ElasticFeatureCardTD>
}

export interface REWCardTD{
    category : string,
    link : {
        href : string,
        title : string
    },
    logo : {
        url : string
    },
    title : string,
    subtitle : string
}

export interface ReportEventsWebinarsTD{
    block_type : string,
    title : string,
    card : Array<REWCardTD>
}

export interface ModularBlocks {
    [index: number]: OurCustomersTD | StarterProductsTD | FeaturesOfElasticProductTD | ReportEventsWebinarsTD;
  }

export interface LandingPageTD{
    modular_blocks : ModularBlocks
}