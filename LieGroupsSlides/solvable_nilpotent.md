---
marp: true
paginate: true
---

### Ideals of Lie algebras

$\newcommand{\fa}{\mathfrak{a}}
\newcommand{\fb}{\mathfrak{b}}
\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\fn}{\mathfrak{n}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\pv}{\mathbf{p}}
\newcommand{\vv}{\mathbf{v}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\Z}{\mathbb{Z}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calF}{{\cal F}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\triv}{\{ 0 \}}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$A subalgebra $I$ of $\fg$ is an *ideal* if $\xi \in I \ \Longrightarrow \ \ad_\xi(\fg) \subseteq I$.

If $I$ is an ideal of $\fg$, then $\fg/I$ is a Lie algebra. 

If $\phi : \fg_1 → \fg_2$ is a Lie algebra morphism then $\text{ker} \ \phi$ is an ideal, and 
$$
\fg/\text{ker} \ \phi \approx \phi(\fg).
$$

If $I_1$ and $I_2$ are ideals in $\fg$, then the following are also ideals:
- $I_1 \cap I_2$ 
- $I_1 + I_2$ 
- $[I_1, I_2]% = \text{span}\{ [x, y] :  x ∈ I_1, y ∈ I_2 \}$.

The last assertion follows from the Jacobi identity: given $\xi \in \fg$, $\eta \in I_1$, and $\zeta \in I_2$, 
$$
[\xi, [\eta, \zeta]] = [\underbrace{[\xi, \eta]}_{\in I_1}, \zeta] + [\eta, \underbrace{[\xi, \zeta]}_{\in I_2}]  \in [I_1, I_2].
$$

---

Very important ideal: the *derived algebra* (AKA *commutant*) of $\fg$ is
$$
[\fg, \fg] = \text{span}\{[\xi, \eta] : \xi, \eta \in \fg \}.
$$
$~$
***Example:*** Let $\fg = gl(n, F) = F^{n \times n},\ {}$ where $\ F = \R\ {}$ or $\ \C$.
$$
\text{trace} \, AB =  \text{trace\,}BA \qquad \Longrightarrow \qquad \text{trace} [A, B] = 0,
$$
so
$$
[\fg, \fg] \subseteq\fh =  sl(n, F) = \text{ker} \ \text{trace}.
$$
If $E_{ij}$ denotes the $n \times n$ matrix with $ij$th entry = $1$ and all other entries equal to $0$, then 
$$
\{ E_{ij} : i \neq j \}  ∪ \{ E_{jj} - E_{(j - 1)(j-1)} : j = 2, \ldots, n \}
$$
is a basis of $\fh$. 
$$
E_{ij} = \half [E_{ii} - E_{jj}, E_{ij}] \quad\text{if} \ i \neq j \sands
E_{jj} - E_{(j - 1)(j-1)} = [E_{(j-1)j}, E_{j(j-1)}]
$$

$
\Longrightarrow \ [\fh, \fh] \supseteq \fh, \ {}$ and hence $\ [\fg, \fg] = [\fh, \fh] = \fh$.

---

The derived algebra is the smallest ideal of $\fg$ such that the quotient of $\fg$ by the ideal is abelian: taking the quotient by $[\fg, \fg]$ amounts to ignoring any noncommutivity.

In the previous example, with $\ \fg  =  gl(n, F) \ {}$ and $\ [\fg, \fg] = sl(n, F), \ {}$ 
$$
\fg/[\fg, \fg] \approx \R \, \idm \approx \R.
$$
$~$
$\fg$ is *simple* if $\fg$ has no ideals except itself and $\triv$, and $\ [\fg, \fg] \neq \triv$. 

$\fg$ simple $\ \Longrightarrow \ [\fg, \fg] = \fg \ {}$ and $\ Z(\fg) = \triv$.
$~$
***Example:***  $sl(2, \R)$. (More generally, any $F$ such that $\text{char}\, F \neq 2$.)

$0 \neq \xi = x \, e + y \, f + z \, h \in I \quad \Longrightarrow$ 
$$
[e, [e, \xi]] = [e, y \, h \pm 2 e] = - 2 \, y \, e 
\sands
[f, [f, \xi]] = [f, - x \, h \pm 2 f] = - 2 \, x \, f, 
$$
so $\ I = sl(2, \R) \ {}$ if either $x$ or $y$ is nonzero. 
$x = y = 0\quad \Longrightarrow \quad h \in I \quad \Longrightarrow \quad I = sl(2, \R)$.

---

## Solvable and nilpotent Lie algebras

The *lower central series* and *derived series* of a Lie algebra $\fg$ are given by
$$\eqa{
\fg^0 := \fg \qquad \qquad \qquad \quad\ \ & D^0 \fg^{(0})} := \fg\\
\fg^{j + 1} := [\fg, \fg^j] \qquad \qquad & \fg^{(j + 1)} := [\fg^{(j)}, \fg^{(j)}].    
}
$$
$\fg^j$ and $\fg^{(j)}$ are ideals for all $j \in \N$. 

$\fg$ is *nilpotent* if $\ \fg^{k} = 0\ {}$ for some $k \in \N$.

$\fg$ is *solvable* if $\ fg^{(k)} = 0\ {}$ for some $k \in \N$.
$~$
There is a natural relationship between "nilpotent" as applied to a Lie algebra $\fg$ and "nilpotent" as applied to the operators $\ad_\xi \ {}$ for $\xi \in \fg$.

Engel's Theorem: $\fg$ is nilpotent $\quad \Longleftrightarrow \quad$ $\ad_\xi$ is nilpotent for all $\xi \in \fg$. 
(Sketch of the proof later.) 

---

***Claim:*** If $\xi \in gl(V)\ {}$ is nilpotent, then $\ad_\xi \ {}$ is nilpotent.
$~$
*Verify:* Define $\ell_\xi, r_\xi \in \text{End}(\text{End}(V))\ {}$ by
$$
\ell_\xi(\eta) := \xi \, \eta \sands r_\xi(\eta) := \eta \, \xi \qquad \quad \forall \ \eta \in \text{End}(V).
$$
$~$
$$\xi^k = 0 \quad \Longrightarrow \quad \ell_\xi^k = 0 = r_\xi^k, \ {}$$ 
so $\ell_\xi$ and $r_\xi$ are nilpotent. 

Commutivity of $\ell_\xi$ and $r_\xi \ \Longrightarrow$
$$
\ad_\xi^n = (\ell_\xi - r_\xi)^n = \sum_{j = 0}^n c_j \ell_\xi^j r_\xi^{n - j}
$$
for $n \in \N$ and constants $c_j \in \Z$. 

If $\ n \geq 2 k, \ {}$ then $\ j \geq k \ {}$ or $\ n - j \geq k \ {}$ for $\ j = 0, \ldots, n$, so $\ \ad_\xi\ {}$ is nilpotent.

---

###  Example: upper triangular and strictly upper triangular matrices 

Let $\fb$ denote the Lie algebra of $n \times n$ upper triangular matrices, and 
$\fn$ denote the subalgebra of strictly upper triangular matrices. 

***Claim:*** $\fb$ is solvable and $\fn$ is nilpotent.

*Verify:* We'll follow tradition and work with flags. 

A *flag*  in a finite dimensional vector space $V$ is a nested sequence of proper subspaces
$$
V_0 = \triv ⊂ V_1 ⊂V_2 ⊂ \cdots  ⊂ V_n =V.
$$

Given a flag in $V$, temporarily let $\ V_{-j} = \triv \ {}$ for $n \in \N$, and define
$$
\fa_k := \{ \phi ∈ gl(V): \phi(V_j) ⊂ V_{j - k} \quad j = 1, \ldots, n \} \quad \qquad k = 0, \ldots, n,
$$
which satisfy $\ \triv = \fa_n \subseteq \fa_{n - 1} \subseteq \cdots \subseteq \fa_1 \ {}$.

$\phi \in \fa_j$ and $\psi \in \fa_k \ \Longrightarrow \ \phi \psi \in \fa_{j + k}$, so
$$\ [\fa_j, \fa_k] ⊂ \fa_{j + k}. \ {}$$ 

---

Set 
$$
\fb  := \fa_0 \sands \fn := \fa_1.
$$
Nilpotency of $\fn$ follows from $\ \fn^n \subseteq \fa_n = \triv, \ {}$ which can be shown by induction, 
with induction step
$$
\fn^j = [\fn,  \fn^{j - 1}] \subseteq [\fa_1, \fa_j] \subseteq \fa_{j + 1}.
$$
$~$
Now specialize to the "standard" flag in $F^n$. Let $\ \{ e_1, \ldots, e_n \}\ {}$ be a basis of $F^n$,
$$
V_0 := \triv \sands
V_j = \text{span} \{e_1, \ldots, e_j\} \qquad j = 1, \ldots, n.
$$

$\phi, \psi \in \fb \ \Longrightarrow \  [\phi, \psi] ∈ \fn = \fa_1$. (Exercise.)

Hence $\ \fb^{(1)} \subseteq \fa_1,$
$$
\fb^{(2)} = [\fb^{(1)}, \fb^{(1)}] \subseteq [\fa_1, \fa_1] \subseteq \fa_2,
$$
and so on. By induction, $\fb^{(j)} \subseteq \fa_{2j}, \ {}$ so $\fb$ is solvable.

---

### Properties of nilpotent Lie algebras:

(1) $\fg$ nilpotent $\quad \Longrightarrow \quad$ all subalgebras and homomorphic images of $\fg$ are nilpotent.

(2) $\fg$ nilpotent and nontrivial  $\quad \Longrightarrow \quad Z(\fg) \neq \triv$.

(3) $\fg/Z(\fg)$ nilpotent $\quad \Longrightarrow \quad \fg \ {}$ nilpotent.

*Verify:*
(1) If $\fh$ is a subalgebra of $\fg$, then $D_j \fh \subseteq D_j\fg$.

If $\fk = \phi(\fg), \ {}$ then $\ \fk^0 = \phi(\fg^0), \ {}$ and $\ \fk^j = \phi(\fg^j) \quad \Longrightarrow$
$$
%D_j \fk = \phi(D_j \fg) \quad j = 0, \ldots, k \qquad \Longrightarrow \qquad
\fk^{j + 1} = [\fk,  \fk^j] = [\phi(\fg), \phi(\fg^j)] = \phi([\fg, \fg^j]) = \phi(\fg^{j + 1}).
$$
$~$
(2) $\fg$ nilpotent and nontrivial $\quad \Longrightarrow \quad \exists \ k \, {}$ such that 
$$
\fg^k\neq \triv = \fg^{k + 1} = [\fg, \fg^k].
$$
Hence $Z(\fg) \supseteq \ \fg^k \neq \triv$.

---

(3) $\fg/Z(\fg)$ nilpotent $\quad \Longrightarrow \quad \exists  k \, {}$ such that $\ \fg^k \subseteq Z(\fg), \ {}$ and hence
$$
\fg^{k + 1} = [\fg, \fg^k]
\subseteq [\fg, Z(\fg)] = \triv.
$$

### Properties of solvable Lie algebras:

(1) $\fg$ solvable $\quad \Longrightarrow \quad$ all subalgebras and homomorphic images of $\fg$ are solvable.

(2) If $\ I ⊂ \fg\ {}$ is a solvable ideal and $\ \fg/I \ {}$ is solvable, then $\fg$ is solvable.

(3) If $I$ and $J$ are solvable ideals of $\fg, \ {}$ then so is $I + J$.
$~$
*Verify:*

(1) Analogous to arguments for nilpotency.

(2) Let $k, n\in \N$ satisfy 
$$
I^{(k)} = \triv \sands  (\fg/I)^{(n)} = \triv. 
$$

---

Apply (1) to the quotient homomorphism $\ \pi: \fg \to \fg/I. \ {}$ 
$$
% 0 \quad \Longrightarrow \quad 
\fg^{(n)} \subseteq I = \text{ker} \ \pi 
\quad \Longrightarrow \quad \pi(\fg^{(n)}) = 0.
$$

$$
(\fg^{(i)})^{(j)} = \fg^{(i + j)} \quad \forall \ i, j \in \N \qquad \Longrightarrow \qquad 
\fg^{(k + n)} = (\fg^{(k)})^{(n)} \subseteq I^{(n)} = \triv.
$$
$~$
(3) $I$ and $J$ solvable $\ \Longrightarrow \ I \cap J\ {}$ is solvable. Hence
$$\eqa{
(I + J)/J \approx I/(I \cap J)   \quad &\Longrightarrow \quad (I + J)/J \quad \text{solvable} \\
& \Longrightarrow \quad I + J \quad \text{solvable}.
}
$$

---

### Semisimple Lie algebras

$S$ is a *maximal solvable ideal* if $S$ is a solvable ideal in $\fg$ and is not a proper subset of another solvable ideal in $\fg$. 

***Claim:*** There is *maximal solvable ideal* $\ \text{Rad} \, \fg \ {}$ in $\fg, \ {}$ called the *radical* of $\fg$. 

*Verify:* If $S$ is a maximal solvable ideal, and $I$ is another ideal of $\fg$, then (3) $\ \Longrightarrow$
$S + I \ {}$ is solvable. 
Hence maximality of $S\ \Longrightarrow S + I = S$.
$~$
$\fg$ is *semisimple* if $\ \text{Rad} \, \fg\ {}$ is trivial.
$~$
Simple Lie algebras are semisimple.
*Why?* The only ideals of a simple algebra $\fg$ are $\triv$ and $\fg$, and $\fg$ simple $\ \Longrightarrow \ [\fg, \fg] = \fg, \ {}$ so $\fg$ is not solvable.

$\fg/\text{Rad} \, \fg\ {}$ is always semisimple.

---

### Ideals of Lie algebras

A subalgebra $I$ of $\fg$ is an *ideal* if $\xi \in I \ \Longrightarrow \ \ad_\xi(\fg) \subseteq I$.

If $I$ is an ideal of $\fg$, then $\fg/I$ is a Lie algebra. 

If $\phi : \fg_1 → \fg_2$ is a Lie algebra morphism then $\text{ker} \ \phi$ is an ideal, and 
$$
\fg_1/\text{ker} \ \phi \approx \phi(\fg_1).
$$

If $I_1$ and $I_2$ are ideals in $\fg$, then the following are also ideals:
- $I_1 \cap I_2$ 
- $I_1 + I_2$ 
- $[I_1, I_2]% = \text{span}\{ [x, y] :  x ∈ I_1, y ∈ I_2 \}$.

The last assertion follows from the Jacobi identity: given $\xi \in \fg$, $\eta \in I_1$, and $\zeta \in I_2$, 
$$
[\xi, [\eta, \zeta]] = [\underbrace{[\xi, \eta]}_{\in I_1}, \zeta] + [\eta, \underbrace{[\xi, \zeta]}_{\in I_2}]  \in [I_1, I_2].
$$

---

Very important ideal: the *derived algebra* (AKA *commutant*) of $\fg$ is
$$
[\fg, \fg] = \text{span}\{[\xi, \eta] : \xi, \eta \in \fg \}.
$$
$~$
***Example:*** Let $\fg = gl(n, F) = F^{n \times n},\ {}$ where $\ F = \R\ {}$ or $\ \C$.
$$
\text{trace} \, AB =  \text{trace\,}BA \qquad \Longrightarrow \qquad \text{trace} [A, B] = 0,
$$
so
$$
[\fg, \fg] \subseteq\fh =  sl(n, F) = \text{ker} \ \text{trace}.
$$
If $E_{ij}$ denotes the $n \times n$ matrix with $ij$th entry = $1$ and all other entries equal to $0$, then 
$$
\{ E_{ij} : i \neq j \}  ∪ \{ E_{jj} - E_{(j - 1)(j-1)} : j = 2, \ldots, n \}
$$
is a basis of $\fh$. 
$$
E_{ij} = \half [E_{ii} - E_{jj}, E_{ij}] \quad\text{if} \ i \neq j \sands
E_{jj} - E_{(j - 1)(j-1)} = [E_{(j-1)j}, E_{j(j-1)}]
$$

$
\Longrightarrow \ [\fh, \fh] \supseteq \fh, \ {}$ and hence $\ [\fg, \fg] = [\fh, \fh] = \fh$.

---

The derived algebra is the smallest ideal of $\fg$ such that the quotient of $\fg$ by the ideal is abelian: taking the quotient by $[\fg, \fg]$ amounts to ignoring any noncommutivity.

In the previous example, with $\ \fg  =  gl(n, F) \ {}$ and $\ [\fg, \fg] = sl(n, F), \ {}$ 
$$
\fg/[\fg, \fg] \approx \R \, \idm \approx \R.
$$
$~$
$\fg$ is *simple* if $\fg$ has no ideals except itself and $\triv$, and $\ [\fg, \fg] \neq \triv$. 

$\fg$ simple $\ \Longrightarrow \ [\fg, \fg] = \fg \ {}$ and $\ Z(\fg) = \triv$.
$~$
***Example:***  $sl(2, F)$. (Any $F$ such that $\text{char}\, F \neq 2$.)

$0 \neq \xi = x \, e + y \, f + z \, h \in I \quad \Longrightarrow$ 
$$
[e, [e, \xi]] = [e, y \, h - 2 \, z\, e] = - 2 \, y \, e 
\sands
[f, [f, \xi]] = [f, - x \, h + 2 \, z \, f] = 2 \, x \, f, 
$$
so $\ I = sl(2, \R) \ {}$ if either $x$ or $y$ is nonzero. 
$x = y = 0\quad \Longrightarrow \quad h \in I \quad \Longrightarrow \quad I = sl(2, \R)$.

---

## Solvable and nilpotent Lie algebras

The *lower central series* and *derived series* of a Lie algebra $\fg$ are given by
$$\eqa{
\fg^0 := \fg \qquad \qquad \qquad\ \ \ &  \fg^{(0)} := \fg\\
\fg^{j + 1} := [\fg, \fg^j] \qquad \qquad & \fg^{(j + 1)} := [\fg^{(j)}, \fg^{(j)}].    
}
$$
$\fg^j$ and $\fg^{(j)}$ are ideals for all $j \in \N$. 

$\fg$ is *nilpotent* if $\ \fg^{k} = 0\ {}$ for some $k \in \N$.

$\fg$ is *solvable* if $\fg^{(k)} = 0\ {}$ for some $k \in \N$.
$~$
There is a natural relationship between "nilpotent" as applied to a Lie algebra $\fg$ and "nilpotent" as applied to the operators $\ad_\xi \ {}$ for $\xi \in \fg$.

Engel's Theorem: $\fg$ is nilpotent $\quad \Longleftrightarrow \quad$ $\ad_\xi$ is nilpotent for all $\xi \in \fg$. 
(Sketch of the proof later.) 

---

***Claim:*** If $\xi \in \text{End}(V)\ {}$ is nilpotent, then $\ad_\xi \ {}$ is nilpotent.
$~$
*Verify:* Define $\ell_\xi, r_\xi \in \text{End}(\text{End}(V))\ {}$ by
$$
\ell_\xi(\eta) := \xi \, \eta \sands r_\xi(\eta) := \eta \, \xi \qquad \quad \forall \ \eta \in \text{End}(V).
$$
$~$
$\ell_\xi$ and $r_\xi$ are nilpotent, since $\ \xi^k = 0 \quad \Longrightarrow$
$$
(\ell_\xi^k(\phi))(v) = \xi^k(\phi(v)) = 0 \sands (r_\xi^k(\phi))(v) = \phi(\xi^k(v)) = \phi(0).
$$ 

Commutivity of $\ell_\xi$ and $r_\xi \ \Longrightarrow$
$$
\ad_\xi^n = (\ell_\xi - r_\xi)^n = \sum_{j = 0}^n c_j \ell_\xi^j r_\xi^{n - j}
$$
for $n \in \N$ and constants $c_j \in \Z$. 

If $\ n \geq 2 k, \ {}$ then $\ j \geq k \ {}$ or $\ n - j \geq k \ {}$ for $\ j = 0, \ldots, n$, so $\ \ad_\xi\ {}$ is nilpotent.

---

###  Example: upper triangular and strictly upper triangular matrices 

Let $\fb$ denote the Lie algebra of $n \times n$ upper triangular matrices, and 
$\fn$ denote the subalgebra of strictly upper triangular matrices. 

***Claim:*** $\fb$ is solvable and $\fn$ is nilpotent.

*Verify:* We'll follow tradition and work with flags. 

A *flag*  in a finite dimensional vector space $V$ is a nested sequence of proper subspaces
$$
V_0 = \triv ⊂ V_1 ⊂V_2 ⊂ \cdots  ⊂ V_n =V.
$$

Given a flag in $V$, temporarily let $\ V_{-j} = \triv \ {}$ for $n \in \N$, and define
$$
\fa_k := \{ \phi ∈ gl(V): \phi(V_j) ⊂ V_{j - k} \quad j = 1, \ldots, n \} \quad \qquad k = 0, \ldots, n,
$$
which satisfy $\ \triv = \fa_n \subseteq \fa_{n - 1} \subseteq \cdots \subseteq \fa_1 \ {}$.

$\phi \in \fa_j$ and $\psi \in \fa_k \ \Longrightarrow \ \phi \psi \in \fa_{j + k}$, so
$$\ [\fa_j, \fa_k] ⊂ \fa_{j + k}. \ {}$$ 

---

Set 
$$
\fb  := \fa_0 \sands \fn := \fa_1.
$$
Nilpotency of $\fn$ follows from $\ \fn^n \subseteq \fa_n = \triv, \ {}$ which can be shown by induction, 
with induction step
$$
\fn^j = [\fn,  \fn^{j - 1}] \subseteq [\fa_1, \fa_j] \subseteq \fa_{j + 1}.
$$
$~$
Now specialize to the "standard" flag in $F^n$. Let $\ \{ e_1, \ldots, e_n \}\ {}$ be a basis of $F^n$,
$$
V_0 := \triv \sands
V_j = \text{span} \{e_1, \ldots, e_j\} \qquad j = 1, \ldots, n.
$$

$\phi, \psi \in \fb \ \Longrightarrow \  [\phi, \psi] ∈ \fn = \fa_1$. (Exercise.)

Hence $\ \fb^{(1)} \subseteq \fa_1,$
$$
\fb^{(2)} = [\fb^{(1)}, \fb^{(1)}] \subseteq [\fa_1, \fa_1] \subseteq \fa_2,
$$
and so on. By induction, $\fb^{(j)} \subseteq \fa_{2j}, \ {}$ so $\fb$ is solvable.

---

### Properties of nilpotent Lie algebras:

(1) $\fg$ nilpotent $\quad \Longrightarrow \quad$ all subalgebras and homomorphic images of $\fg$ are nilpotent.

(2) $\fg$ nilpotent and nontrivial  $\quad \Longrightarrow \quad Z(\fg) \neq \triv$.

(3) $\fg/Z(\fg)$ nilpotent $\quad \Longrightarrow \quad \fg \ {}$ nilpotent.

*Verify:*
(1) If $\fh$ is a subalgebra of $\fg$, then $D_j \fh \subseteq D_j\fg$.

If $\fk = \phi(\fg), \ {}$ then $\ \fk^0 = \phi(\fg^0), \ {}$ and $\ \fk^j = \phi(\fg^j) \quad \Longrightarrow$
$$
%D_j \fk = \phi(D_j \fg) \quad j = 0, \ldots, k \qquad \Longrightarrow \qquad
\fk^{j + 1} = [\fk,  \fk^j] = [\phi(\fg), \phi(\fg^j)] = \phi([\fg, \fg^j]) = \phi(\fg^{j + 1}).
$$
$~$
(2) $\fg$ nilpotent and nontrivial $\quad \Longrightarrow \quad \exists \ k \, {}$ such that 
$$
\fg^k\neq \triv = \fg^{k + 1} = [\fg, \fg^k].
$$
Hence $Z(\fg) \supseteq \ \fg^k \neq \triv$.

---

(3) $\fg/Z(\fg)$ nilpotent $\quad \Longrightarrow \quad \exists  k \, {}$ such that $\ \fg^k \subseteq Z(\fg), \ {}$ and hence
$$
\fg^{k + 1} = [\fg, \fg^k]
\subseteq [\fg, Z(\fg)] = \triv.
$$

### Properties of solvable Lie algebras:

(1) $\fg$ solvable $\quad \Longrightarrow \quad$ all subalgebras and homomorphic images of $\fg$ are solvable.

(2) If $\ I ⊂ \fg\ {}$ is a solvable ideal and $\ \fg/I \ {}$ is solvable, then $\fg$ is solvable.

(3) If $I$ and $J$ are solvable ideals of $\fg, \ {}$ then so is $I + J$.
$~$
*Verify:*

(1) Analogous to arguments for nilpotency.

(2) Let $k, n\in \N$ satisfy 
$$
I^{(k)} = \triv \sands  (\fg/I)^{(n)} = \triv. 
$$

---

Apply (1) to the quotient homomorphism $\ \pi: \fg \to \fg/I. \ {}$ 
$$
% 0 \quad \Longrightarrow \quad 
\fg^{(n)} \subseteq I = \text{ker} \ \pi 
\quad \Longrightarrow \quad \pi(\fg^{(n)}) = 0.
$$

$$
(\fg^{(i)})^{(j)} = \fg^{(i + j)} \quad \forall \ i, j \in \N \qquad \Longrightarrow \qquad 
\fg^{(k + n)} = (\fg^{(k)})^{(n)} \subseteq I^{(n)} = \triv.
$$
$~$
(3) $I$ and $J$ solvable $\ \Longrightarrow \ I \cap J\ {}$ is solvable. Hence
$$\eqa{
(I + J)/J \approx I/(I \cap J)   \quad &\Longrightarrow \quad (I + J)/J \quad \text{solvable} \\
& \Longrightarrow \quad I + J \quad \text{solvable}.
}
$$

---

### Semisimple Lie algebras

$S$ is a *maximal solvable ideal* if $S$ is a solvable ideal in $\fg$ and is not a proper subset of another solvable ideal in $\fg$. 

***Claim:*** There is *maximal solvable ideal* $\ \text{Rad} \, \fg \ {}$ in $\fg, \ {}$ called the *radical* of $\fg$. 

*Verify:* If $S$ is a maximal solvable ideal, and $I$ is another ideal of $\fg$, then (3) $\ \Longrightarrow$
$S + I \ {}$ is solvable. 
Hence maximality of $S\ \Longrightarrow S + I = S$.
$~$
$\fg$ is *semisimple* if $\ \text{Rad} \, \fg\ {}$ is trivial.
$~$
Simple Lie algebras are semisimple.
*Why?* The only ideals of a simple algebra $\fg$ are $\triv$ and $\fg$, and $\fg$ simple $\ \Longrightarrow \ [\fg, \fg] = \fg, \ {}$ so $\fg$ is not solvable.

$\fg/\text{Rad} \, \fg\ {}$ is always semisimple.

