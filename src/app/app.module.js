import appCore from 'app/components/core/core.module';
import appWidgets from 'app/shared/widgets/widgets.module';
import appDashboardEs5 from 'app/components/dashboard-es5/dashboard-es5.module';
import appDashboardEs6 from 'app/components/dashboard-es6/dashboard-es6.module';
import appDashboardTs from 'app/components/dashboard-ts/dashboard-ts.module';
import appDashboardNgIncluded from 'app/components/dashboard-ng-included/dashboard-ng-included.module';
import appImageSelectorEs6 from 'app/components/image-selector-es6/image-selector-es6.module';
import appImageSelectorRequire from 'app/components/image-selector-require/image-selector-require.module';
import appGoogleClosure from 'app/components/google-closure/google-closure.module';
import appHome from 'app/components/home/home.module';
import appFontZarbi from 'app/components/font-zarbi/font-zarbi.module';
import appMiscellaneous from 'app/components/miscellaneous/miscellaneous.module';
import appBootstrapSass from 'app/components/bootstrap-sass/bootstrap-sass.module';
import appMusic from 'app/components/music/music.module';

export default angular
  .module('app', [
    appCore,
    appWidgets,
    appDashboardEs5,
    appDashboardEs6,
    appDashboardTs,
    appDashboardNgIncluded,
    appImageSelectorEs6,
    appImageSelectorRequire,
    appImageSelectorRequire,
    appGoogleClosure,
    appHome,
    appFontZarbi,
    appMiscellaneous,
    appBootstrapSass,
    appMusic
  ])
  .name;
