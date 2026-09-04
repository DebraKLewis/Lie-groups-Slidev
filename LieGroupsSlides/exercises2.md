---
marp: false
---

$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\pv}{\mathbf{p}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
%\newcommand{\R}{\mathbb{R}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calF}{{\cal F}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}\ \ {}$***Frobenius exercise #1.***

Let $M = \R^3$. For each point $\pv \in \R^3$, define 
$$
{\cal D}_\pv := \pv^\perp = \{ \xv \in \R^3: \langle \xv, \pv \rangle = 0 \},
$$
where $\langle \ , \ \rangle $ denotes the Euclidean inner product. (I'm avoiding using the usual dot product dot in hopes of avoiding confusion with group action notation.)
- Show that the assignment of ${\cal D}_\pv$ to $\pv$ defines a (smooth) distribution ${\cal D}$ on $M$. 
- Show that the distribution ${\cal D}$ is invariant with respect to the usual action of $SO(3, \R)$ on $\R^3$. 
- Determine/contruct all maximal integral manifolds of ${\cal D}$. More or less rigorous justify your answer.
$~$

***Frobenius exercise #2.*** 
(Lifted with minor modifications from a [Differential Geometry exercise set](https://www.math.toronto.edu/laithy/3672021/367ps6.pdf) by Ahmed Ellithy, U Toronto.)

Let $U \subset \R^2$ be an open set containing the origin. Consider the following (very simple!) overdetermined system of first order linear PDEs: find a neighborhood $U_0 \subseteq U$ containing $0$ and a smooth function $f: U_0 \to \R$ satisfying
$$
\smallfrac {∂f}{∂x} = g_1, \qquad \smallfrac {∂f}{∂y} = g_2, \sands f(0, 0) = c
$$
for given smooth functions $g_j: U \to \R$ and $c \in \R$. 

If solutions exist with a common $U_0$ for all choices of $c ∈ \R$, what "obvious" necessary condition is satisfied by $g_1$ and $g_2$? 

Continuing with the assumption that solutions with a common domain $U_0$ exist for all $c \in \R$, find/construct an involutive distribution ${\cal D}$, determined by $g_1$ and $g_2$, such that if $f_c: U_0 \to \R$ denotes the solution satisfying $f(0, 0) = c$, the graphs
$$
\Gamma_c := \{ (x, y, f_c(x, y)): (x, y) \in U_0 \}
$$
are all integral manifolds of ${\cal D}$.